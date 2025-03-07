from flask import Flask, render_template, request, jsonify
import requests
import math

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/get_flights", methods=["POST"])
def get_flights():
    try:
        # Check if request has JSON data
        if not request.is_json:
            return jsonify({"error": "Request must be JSON"}), 400
            
        data = request.get_json()
        lat = float(data.get("lat", 0))
        lon = float(data.get("lon", 0))
        radius = float(data.get("radius", 100))
        
        url = f"https://opensky-network.org/api/states/all?lamin={lat-1}&lomin={lon-1}&lamax={lat+1}&lomax={lon+1}"
        response = requests.get(url)
        data = response.json()
        
        flight_data = []
        if data["states"]:
            for state in data["states"]:
                flight_lat, flight_lon = state[6], state[5]
                distance = calculate_distance(lat, lon, flight_lat, flight_lon)
                if distance <= radius:
                    flight_data.append({
                        "icao24": state[0],
                        "callsign": state[1].strip() if state[1] else "N/A",
                        "origin_country": state[2],
                        "altitude": f"{state[7]}m" if state[7] else "N/A",
                        "velocity": f"{round(float(state[9]) * 3.6, 2)} km/h" if state[9] else "N/A",
                        "true_track": f"{state[10]}°" if state[10] else "N/A",
                        "latitude": state[6],
                        "longitude": state[5],
                        "progress": calculate_progress(state[6], state[5], state[10] if state[10] else 0)
                    })
        return jsonify(flight_data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

def calculate_distance(lat1, lon1, lat2, lon2):
    R = 6371
    dLat = math.radians(lat2 - lat1)
    dLon = math.radians(lon2 - lon1)
    a = math.sin(dLat/2) * math.sin(dLat/2) + math.cos(math.radians(lat1)) \
        * math.cos(math.radians(lat2)) * math.sin(dLon/2) * math.sin(dLon/2)
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))
    return R * c

def calculate_progress(lat, lon, heading):
    # Bu basit hesaplama, uçuşun ilerleme yüzdesini tahmin eder
    # Gerçek bir uygulamada, başlangıç ve bitiş noktalarını bilmek gerekir
    distance_from_equator = abs(lat) / 90  # Ekvatordan uzaklık
    distance_from_prime_meridian = abs(lon) / 180  # Başlangıç meridyeninden uzaklık
    heading_factor = (heading % 90) / 90  # Uçuş yönü faktörü
    
    progress = (distance_from_equator + distance_from_prime_meridian + heading_factor) / 3
    return min(round(progress * 100, 2), 100)  # 100'den büyük olmamasını sağla

if __name__ == "__main__":
    app.run(debug=True)