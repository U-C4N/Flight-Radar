// Çeviri nesnesi
const translations = {
    en: {
        mainTitle: "Multilingual Flight Tracker",
        locationLabel: "Location",
        radiusLabel: "Search Radius",
        refreshLabel: "Refresh Flights",
        downloadLabel: "Download Table as JPG",
        thCallsign: "Callsign",
        thCountry: "Country",
        thAltitude: "Altitude (m)",
        thSpeed: "Speed (km/h)",
        thDirection: "Direction (°)",
        thLatitude: "Latitude",
        thLongitude: "Longitude",
        flightCountLabel: "Total flights found:",
        thProgress: "Progress",
        monitoredFlightsLabel: "Monitored Flights",
        scanRangeLabel: "Scan Range",
        trackFlightsLabel: "Track All Flights",
        
        // Popup çevirileri
        closeButton: "Close",
        trackFlight: "Track Flight",
        flightInfo: "Flight Information",
        unknownFlight: "Unknown Flight",
        lowSpeed: "Low Speed",
        mediumSpeed: "Medium Speed",
        highSpeed: "High Speed",
        veryHighSpeed: "Very High Speed",
        lowAltitude: "Low Altitude",
        mediumAltitude: "Medium Altitude",
        highAltitude: "High Altitude",
        distance: "Distance",
        progress: "Progress",
        completed: "completed",
        trackingDev: "Flight tracking feature is currently under development:",
        unknown: "Unknown",
        fromCenter: "from center",
        nearestAircraft: "Nearest aircraft:",
        noAircraftNearby: "No other aircraft nearby"
    },
    ru: {
        mainTitle: "Многоязычный трекер полетов",
        locationLabel: "Местоположение",
        radiusLabel: "Радиус поиска",
        refreshLabel: "Обновить рейсы",
        downloadLabel: "Скачать таблицу как JPG",
        thCallsign: "Позывной",
        thCountry: "Страна",
        thAltitude: "Высота (м)",
        thSpeed: "Скорость (км/ч)",
        thDirection: "Направление (°)",
        thLatitude: "Широта",
        thLongitude: "Долгота",
        flightCountLabel: "Всего найдено рейсов:",
        thProgress: "Прогресс",
        monitoredFlightsLabel: "Отслеживаемые полеты",
        scanRangeLabel: "Диапазон сканирования",
        trackFlightsLabel: "Отслеживать все полеты",
        
        // Popup çevirileri
        closeButton: "Закрыть",
        trackFlight: "Следить за полетом",
        flightInfo: "Информация о полете",
        unknownFlight: "Неизвестный полет",
        lowSpeed: "Низкая скорость",
        mediumSpeed: "Средняя скорость",
        highSpeed: "Высокая скорость",
        veryHighSpeed: "Очень высокая скорость",
        lowAltitude: "Низкая высота",
        mediumAltitude: "Средняя высота",
        highAltitude: "Высокая высота",
        distance: "Расстояние",
        progress: "Прогресс",
        completed: "завершено",
        trackingDev: "Функция отслеживания полетов в настоящее время находится в разработке:",
        unknown: "Неизвестно",
        fromCenter: "от центра",
        nearestAircraft: "Ближайшие самолеты:",
        noAircraftNearby: "Близко других самолетов нет"
    },
    de: {
        mainTitle: "Mehrsprachiger Flugverfolger",
        locationLabel: "Standort",
        radiusLabel: "Suchradius",
        refreshLabel: "Flüge aktualisieren",
        downloadLabel: "Tabelle als JPG herunterladen",
        thCallsign: "Rufzeichen",
        thCountry: "Land",
        thAltitude: "Höhe (m)",
        thSpeed: "Geschwindigkeit (km/h)",
        thDirection: "Richtung (°)",
        thLatitude: "Breite",
        thLongitude: "Länge",
        flightCountLabel: "Insgesamt gefundene Flüge:",
        thProgress: "Fortschritt",
        monitoredFlightsLabel: "Überwachte Flüge",
        scanRangeLabel: "Suchbereich",
        trackFlightsLabel: "Alle Flüge verfolgen",
        
        // Popup çevirileri
        closeButton: "Schließen",
        trackFlight: "Flug verfolgen",
        flightInfo: "Fluginformation",
        unknownFlight: "Unbekannter Flug",
        lowSpeed: "Niedrige Geschwindigkeit",
        mediumSpeed: "Mittlere Geschwindigkeit",
        highSpeed: "Hohe Geschwindigkeit",
        veryHighSpeed: "Sehr hohe Geschwindigkeit",
        lowAltitude: "Niedrige Höhe",
        mediumAltitude: "Mittlere Höhe",
        highAltitude: "Hohe Höhe",
        distance: "Entfernung",
        progress: "Fortschritt",
        completed: "abgeschlossen",
        trackingDev: "Die Flugverfolgungsfunktion befindet sich derzeit in der Entwicklung:",
        unknown: "Unbekannt",
        fromCenter: "vom Mittelpunkt",
        nearestAircraft: "Nächste Flugzeuge:",
        noAircraftNearby: "Keine anderen Flugzeuge in der Nähe"
    },
    tr: {
        mainTitle: "Çok Dilli Uçuş Takip",
        locationLabel: "Konum",
        radiusLabel: "Arama Yarıçapı",
        refreshLabel: "Uçuşları Yenile",
        downloadLabel: "Tabloyu İndir",
        thCallsign: "Çağrı Kodu",
        thCountry: "Ülke",
        thAltitude: "Yükseklik (m)",
        thSpeed: "Hız (km/s)",
        thDirection: "Yön (°)",
        thLatitude: "Enlem",
        thLongitude: "Boylam",
        flightCountLabel: "Toplam bulunan uçuş:",
        thProgress: "İlerleme",
        monitoredFlightsLabel: "İzlenen Uçuşlar",
        scanRangeLabel: "Tarama Mesafesi",
        trackFlightsLabel: "Tüm Uçuşları İzle",
        
        // Popup çevirileri
        closeButton: "Kapat",
        trackFlight: "Uçuşu Takip Et",
        trackFlights: "Tüm Uçuşları İzle",
        trackingActive: "İzleme Aktif",
        flightInfo: "Uçuş Bilgisi",
        unknownFlight: "Bilinmeyen Uçuş",
        lowSpeed: "Düşük Hız",
        mediumSpeed: "Orta Hız",
        highSpeed: "Yüksek Hız",
        veryHighSpeed: "Çok Yüksek Hız",
        lowAltitude: "Alçak İrtifa",
        mediumAltitude: "Orta İrtifa",
        highAltitude: "Yüksek İrtifa",
        distance: "Mesafe",
        progress: "İlerleme",
        completed: "tamamlandı",
        trackingDev: "Uçuş takip özelliği şu anda geliştirme aşamasındadır:",
        unknown: "Bilinmiyor",
        distanceInfo: "Mesafe Bilgisi",
        selectAircraft: "Mesafe bilgisi için radar üzerinde bir uçak seçin",
        nearestAircraft: "En yakın uçaklar:",
        fromCenter: "merkezden",
        noAircraftNearby: "Yakında başka uçak yok"
    },
    es: {
        mainTitle: "Rastreador de vuelos multilingüe",
        locationLabel: "Ubicación",
        radiusLabel: "Radio de búsqueda",
        refreshLabel: "Actualizar vuelos",
        downloadLabel: "Descargar tabla como JPG",
        thCallsign: "Indicativo",
        thCountry: "País",
        thAltitude: "Altitud (m)",
        thSpeed: "Velocidad (km/h)",
        thDirection: "Dirección (°)",
        thLatitude: "Latitud",
        thLongitude: "Longitud",
        flightCountLabel: "Total de vuelos encontrados:",
        thProgress: "Progreso",
        monitoredFlightsLabel: "Vuelos monitoreados",
        scanRangeLabel: "Rango de exploración",
        trackFlightsLabel: "Seguir todos los vuelos",
        
        // Popup çevirileri
        closeButton: "Cerrar",
        trackFlight: "Seguir vuelo",
        flightInfo: "Información del vuelo",
        unknownFlight: "Vuelo desconocido",
        lowSpeed: "Velocidad baja",
        mediumSpeed: "Velocidad media",
        highSpeed: "Velocidad alta",
        veryHighSpeed: "Velocidad muy alta",
        lowAltitude: "Altitud baja",
        mediumAltitude: "Altitud media",
        highAltitude: "Altitud alta",
        distance: "Distancia",
        progress: "Progreso",
        completed: "completado",
        trackingDev: "La función de seguimiento de vuelo está actualmente en desarrollo:",
        unknown: "Desconocido",
        fromCenter: "del centro",
        nearestAircraft: "Aeronaves más cercanas:",
        noAircraftNearby: "No hay otras aeronaves cerca"
    },
    fr: {
        mainTitle: "Suivi de vol multilingue",
        locationLabel: "Emplacement",
        radiusLabel: "Rayon de recherche",
        refreshLabel: "Actualiser les vols",
        downloadLabel: "Télécharger le tableau en JPG",
        thCallsign: "Indicatif",
        thCountry: "Pays",
        thAltitude: "Altitude (m)",
        thSpeed: "Vitesse (km/h)",
        thDirection: "Direction (°)",
        thLatitude: "Latitude",
        thLongitude: "Longitude",
        flightCountLabel: "Total des vols trouvés:",
        thProgress: "Progrès",
        monitoredFlightsLabel: "Vols surveillés",
        scanRangeLabel: "Étendue de la recherche",
        trackFlightsLabel: "Suivre tous les vols",
        
        // Popup çevirileri
        closeButton: "Fermer",
        trackFlight: "Suivre le vol",
        flightInfo: "Informations sur le vol",
        unknownFlight: "Vol inconnu",
        lowSpeed: "Vitesse faible",
        mediumSpeed: "Vitesse moyenne",
        highSpeed: "Vitesse élevée",
        veryHighSpeed: "Vitesse très élevée",
        lowAltitude: "Altitude basse",
        mediumAltitude: "Altitude moyenne",
        highAltitude: "Altitude élevée",
        distance: "Distance",
        progress: "Progrès",
        completed: "complété",
        trackingDev: "La fonction de suivi des vols est actuellement en cours de développement:",
        unknown: "Inconnu",
        fromCenter: "du centre",
        nearestAircraft: "Aéronefs les plus proches:",
        noAircraftNearby: "Pas d'autres aéronefs à proximité"
    },
};

let currentLat, currentLon;
const radiusSlider = document.getElementById("radiusSlider");
const radiusValue = document.getElementById("radiusValue");
const canvas = document.getElementById('radarCanvas');
const ctx = canvas.getContext('2d');
let currentFlights = [];
let selectedAircraft = null;

function updateLanguage(lang) {
    const t = translations[lang] || translations.en;
    
    document.getElementById('mainTitle').textContent = t.mainTitle;
    document.getElementById('locationLabel').textContent = t.locationLabel;
    document.getElementById('radiusLabel').textContent = t.radiusLabel;
    document.getElementById('refreshBtn').querySelector('span').textContent = t.refreshLabel;
    document.getElementById('downloadBtn').querySelector('span').textContent = t.downloadLabel;
    document.getElementById('trackFlightsLabel').textContent = t.trackFlightsLabel;
    
    document.getElementById('monitoredFlightsLabel').textContent = t.monitoredFlightsLabel;
    document.getElementById('scanRangeLabel').textContent = t.scanRangeLabel;
    
    document.getElementById('thCallsign').textContent = t.thCallsign;
    document.getElementById('thCountry').textContent = t.thCountry;
    document.getElementById('thAltitude').textContent = t.thAltitude;
    document.getElementById('thSpeed').textContent = t.thSpeed;
    document.getElementById('thDirection').textContent = t.thDirection;
    document.getElementById('thLatitude').textContent = t.thLatitude;
    document.getElementById('thLongitude').textContent = t.thLongitude;
    document.getElementById('thProgress').textContent = t.thProgress;
    
    const distanceInfoTitle = document.getElementById('distanceInfoTitle');
    if (distanceInfoTitle) {
        distanceInfoTitle.textContent = t.distanceInfo || 'Distance Information';
    }
    
    if (selectedAircraft) {
        updateDistanceInformation(selectedAircraft, currentFlights);
    } else {
        clearDistanceInformation();
    }
    
    updateFlightCount(lang);
}

function updateFlightCount(lang) {
    const flightCount = document.querySelector("#flightTable tbody").childElementCount;
    document.getElementById("flightCount").textContent = flightCount.toString();
    
    const flightCountLabel = document.getElementById("flightCountLabel");
    if (flightCountLabel) {
        flightCountLabel.innerHTML = `${translations[lang].flightCountLabel} <span class="text-black font-bold">${flightCount}</span>`;
    }
    
    const currentRadius = parseInt(document.getElementById("radiusValue").textContent);
    const maxRadius = 250;
    const progressPercentage = (currentRadius / maxRadius) * 100;
    const scanRangeProgress = document.getElementById("scanRangeProgress");
    if (scanRangeProgress) {
        scanRangeProgress.style.width = `${progressPercentage}%`;
    }
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    currentLat = position.coords.latitude;
    currentLon = position.coords.longitude;
    getCity(currentLat, currentLon);
    getFlights(currentLat, currentLon);
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}

function getCity(lat, lon) {
    axios.get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`)
        .then((response) => {
            const city = response.data.address.city || response.data.address.town || response.data.address.village || "Unknown City";
            const lang = document.getElementById("languageSelect").value;
            document.getElementById("locationLabel").innerText = `${translations[lang].locationLabel}: ${lat.toFixed(4)}, ${lon.toFixed(4)} (${city})`;
        })
        .catch((error) => console.error("Error:", error));
}

function initRadar() {
    const container = document.getElementById('radarContainer');
    const canvasWidth = container.clientWidth;
    const canvasHeight = container.clientHeight;
    
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    
    drawRadar();
    
    canvas.addEventListener('click', handleRadarClick);
    
    window.addEventListener('resize', () => {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        if (currentFlights.length > 0) {
            updateRadarPoints(currentFlights);
        } else {
            drawRadar();
        }
    });
}

function drawRadar() {
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 10;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Simple white background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);
    
    // Get current radius value for distance calculations
    const currentRadius = parseInt(document.getElementById("radiusValue")?.textContent || "100");
    
    // Draw concentric circles with distance labels
    for (let i = 1; i <= 4; i++) {
        const ringRadius = radius * (i / 4);
        ctx.beginPath();
        ctx.arc(centerX, centerY, ringRadius, 0, Math.PI * 2);
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = i === 4 ? 2 : 1;
        ctx.setLineDash([]);
        ctx.stroke();
        
        // Add distance labels on the rings
        const distance = Math.round((currentRadius / 4) * i);
        ctx.font = '10px Inter, sans-serif';
        ctx.fillStyle = '#666666';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Place distance label at the top of each ring
        ctx.fillText(`${distance}km`, centerX, centerY - ringRadius + 10);
    }
    
    // Draw coordinate lines (N, S, E, W) - enhanced with better visibility
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - radius);
    ctx.lineTo(centerX, centerY + radius);
    ctx.moveTo(centerX - radius, centerY);
    ctx.lineTo(centerX + radius, centerY);
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1;
    ctx.setLineDash([]);
    ctx.stroke();
    
    // Add diagonal reference lines for better orientation
    ctx.beginPath();
    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = '#cccccc';
    ctx.lineWidth = 1;
    // NE-SW diagonal
    const diagOffset = radius * 0.707; // cos(45°) = sin(45°) ≈ 0.707
    ctx.moveTo(centerX + diagOffset, centerY - diagOffset);
    ctx.lineTo(centerX - diagOffset, centerY + diagOffset);
    // NW-SE diagonal
    ctx.moveTo(centerX - diagOffset, centerY - diagOffset);
    ctx.lineTo(centerX + diagOffset, centerY + diagOffset);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Add cardinal direction labels with better positioning
    ctx.font = '14px Inter, sans-serif';
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    ctx.fillText('N', centerX, centerY - radius + 15);
    ctx.fillText('S', centerX, centerY + radius - 15);
    ctx.fillText('E', centerX + radius - 15, centerY);
    ctx.fillText('W', centerX - radius + 15, centerY);
    
    // Add intermediate directions
    ctx.font = '10px Inter, sans-serif';
    ctx.fillStyle = '#666666';
    const offset45 = radius * 0.8;
    ctx.fillText('NE', centerX + offset45 * 0.707, centerY - offset45 * 0.707);
    ctx.fillText('NW', centerX - offset45 * 0.707, centerY - offset45 * 0.707);
    ctx.fillText('SE', centerX + offset45 * 0.707, centerY + offset45 * 0.707);
    ctx.fillText('SW', centerX - offset45 * 0.707, centerY + offset45 * 0.707);
    
    // Draw enhanced sweep line with trail effect
    const now = Date.now();
    const angle = (now / 3000) % (Math.PI * 2); // Slower sweep for better visibility
    
    // Main sweep line
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + Math.cos(angle) * radius, centerY + Math.sin(angle) * radius);
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Add a subtle sweep area behind the line
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, angle - 0.3, angle, false);
    ctx.closePath();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fill();
    
    // Draw center point with better visibility
    ctx.beginPath();
    ctx.arc(centerX, centerY, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#000000';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(centerX, centerY, 2, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    
    // Continue animation
    if (currentFlights.length > 0) {
        updateRadarPoints(currentFlights);
    } else {
        requestAnimationFrame(drawRadar);
    }
}

function updateRadarPoints(flights) {
    if (!canvas || !ctx) return;
    
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const maxRadius = Math.min(width, height) / 2 - 10;
    
    const selectedId = selectedAircraft ? selectedAircraft.icao24 : null;
    
    drawRadar();
    
    const radiusValue = parseInt(document.getElementById("radiusValue").textContent);
    const radarRadius = radiusValue;
    
    const userLat = currentLat || 0;
    const userLon = currentLon || 0;
    
    flights.forEach(flight => {
        const distance = calculateDistance(userLat, userLon, flight.latitude, flight.longitude);
        
        if (distance > radarRadius) return;
        
        const bearing = calculateBearing(userLat, userLon, flight.latitude, flight.longitude);
        
        const normalizedDistance = distance / radarRadius;
        const pointRadius = normalizedDistance * maxRadius;
        const angleRad = (90 - bearing) * Math.PI / 180;
        
        const x = centerX + pointRadius * Math.cos(angleRad);
        const y = centerY - pointRadius * Math.sin(angleRad);
        
        const isSelected = flight.icao24 === selectedId;
        
        drawAircraftPoint(ctx, flight, centerX, centerY, maxRadius, radarRadius, isSelected);
    });
    
    requestAnimationFrame(() => updateRadarPoints(flights));
}

function drawAircraftPoint(ctx, flight, centerX, centerY, maxRadius, radarRadius, isSelected = false) {
    const userLat = currentLat || 0;
    const userLon = currentLon || 0;
    
    const distance = calculateDistance(userLat, userLon, flight.latitude, flight.longitude);
    const bearing = calculateBearing(userLat, userLon, flight.latitude, flight.longitude);
    
    const normalizedDistance = distance / radarRadius;
    const pointRadius = normalizedDistance * maxRadius;
    const angleRad = (90 - bearing) * Math.PI / 180;
    
    const x = centerX + pointRadius * Math.cos(angleRad);
    const y = centerY - pointRadius * Math.sin(angleRad);
    
    // Simple black and white coloring based on altitude
    let color = '#000000'; // Default black
    if (flight.altitude !== "N/A") {
        const altitude = parseFloat(flight.altitude);
        if (altitude < 3000) color = '#666666'; // Dark gray for low
        else if (altitude < 8000) color = '#333333'; // Medium gray
        else color = '#000000'; // Black for high
    } else {
        color = '#999999'; // Light gray for unknown
    }
    
    ctx.save();
    
    // Draw aircraft marker
    if (flight.true_track && flight.true_track !== "N/A") {
        const heading = parseFloat(flight.true_track);
        const headingRad = (90 - heading) * Math.PI / 180;
        
        ctx.translate(x, y);
        ctx.rotate(-headingRad);
        
        const size = isSelected ? 12 : 8;
        
        // Simple triangle
        ctx.beginPath();
        ctx.moveTo(0, -size);
        ctx.lineTo(-size/2, size/2);
        ctx.lineTo(size/2, size/2);
        ctx.closePath();
        
        ctx.fillStyle = color;
        ctx.fill();
        
        if (isSelected) {
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.stroke();
            
            // Simple selection indicator
            const pulseSize = 16;
            ctx.beginPath();
            ctx.arc(0, 0, pulseSize, 0, Math.PI * 2);
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 1;
            ctx.stroke();
        }
    } else {
        // Simple circle if no heading
        ctx.beginPath();
        ctx.arc(x, y, isSelected ? 8 : 5, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        
        if (isSelected) {
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.stroke();
            
            const pulseSize = 12;
            ctx.beginPath();
            ctx.arc(x, y, pulseSize, 0, Math.PI * 2);
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 1;
            ctx.stroke();
        }
    }
    
    ctx.restore();
    
    // Add label for selected aircraft
    if (isSelected) {
        ctx.font = 'bold 12px Inter, sans-serif';
        ctx.fillStyle = '#000000';
        ctx.textAlign = 'center';
        ctx.fillText(flight.callsign || flight.icao24, x, y - 20);
    }
}

function getFlights(lat, lon) {
    const radius = radiusSlider.value;
    axios.post("/get_flights", 
        { lat, lon, radius },
        { 
            headers: { 
                'Content-Type': 'application/json' 
            } 
        }
    )
        .then((response) => {
            const flights = response.data;
            currentFlights = flights; // Global değişkeni güncelle
            updateFlightTable(flights);
            updateRadarPoints(flights);
            updateFlightCount(document.getElementById("languageSelect").value);
        })
        .catch((error) => {
            console.error("Error:", error);
            if (error.response && error.response.data && error.response.data.error) {
                console.error("Server error:", error.response.data.error);
            }
        });
}

function updateFlightTable(flights) {
    const table = document.getElementById("flightTable").getElementsByTagName('tbody')[0];
    table.innerHTML = '';
    
    const lang = document.getElementById("languageSelect").value;
    const flightCountEl = document.getElementById("flightCount");
    
    if (flightCountEl) {
        flightCountEl.textContent = flights.length.toString();
    }
    
    flights.forEach(flight => {
        const row = table.insertRow();
        row.className = "flight-row hover:bg-gray-100 transition-all cursor-pointer";
        row.setAttribute("data-icao", flight.icao24);
        
        // ICAO24
        const icaoCell = row.insertCell();
        icaoCell.textContent = flight.icao24;
        icaoCell.className = "px-2 sm:px-3 py-2 font-mono text-xs";
        
        // Callsign
        const callsignCell = row.insertCell();
        callsignCell.textContent = flight.callsign;
        callsignCell.className = "px-2 sm:px-3 py-2 font-medium";
        
        // Country
        const countryCell = row.insertCell();
        countryCell.textContent = flight.origin_country;
        countryCell.className = "px-2 sm:px-3 py-2";
        
        // Altitude - simple styling
        const altitudeCell = row.insertCell();
        altitudeCell.textContent = flight.altitude;
        altitudeCell.className = "px-2 sm:px-3 py-2";
        
        // Velocity - simple styling
        const velocityCell = row.insertCell();
        velocityCell.textContent = flight.velocity;
        velocityCell.className = "px-2 sm:px-3 py-2";
        
        // True Track
        const trackCell = row.insertCell();
        trackCell.textContent = flight.true_track;
        trackCell.className = "px-2 sm:px-3 py-2";
        
        // Latitude - hidden on mobile
        const latCell = row.insertCell();
        latCell.textContent = flight.latitude.toFixed(4);
        latCell.className = "px-2 sm:px-3 py-2 font-mono text-xs hidden sm:table-cell";
        
        // Longitude - hidden on mobile
        const lonCell = row.insertCell();
        lonCell.textContent = flight.longitude.toFixed(4);
        lonCell.className = "px-2 sm:px-3 py-2 font-mono text-xs hidden sm:table-cell";
        
        // Progress - simple black progress bar
        const progressCell = row.insertCell();
        const progressBarHtml = `
            <div class="flex items-center">
                <div class="w-full bg-gray-200 h-2 mr-1 sm:mr-2 min-w-[40px]">
                    <div class="bg-black h-2" style="width: ${flight.progress}%"></div>
                </div>
                <span class="text-xs whitespace-nowrap">${flight.progress}%</span>
            </div>
        `;
        progressCell.innerHTML = progressBarHtml;
        progressCell.className = "px-2 sm:px-3 py-2";
        
        // Add click handler
        row.addEventListener('click', function() {
            showFlightInfo(flight);
        });
    });
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

function calculateBearing(lat1, lon1, lat2, lon2) {
    const dLon = deg2rad(lon2 - lon1);
    const y = Math.sin(dLon) * Math.cos(deg2rad(lat2));
    const x = Math.cos(deg2rad(lat1)) * Math.sin(deg2rad(lat2)) -
              Math.sin(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.cos(dLon);
    return Math.atan2(y, x);
}

function deg2rad(deg) {
    return deg * (Math.PI/180);
}

function handleRadarClick(event) {
    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxRadius = Math.min(canvas.width, canvas.height) / 2 - 10;
    const radiusValue = parseInt(document.getElementById("radiusValue").textContent);
    
    let closestAircraft = null;
    let closestDistance = 20;
    
    currentFlights.forEach(flight => {
        const distance = calculateDistance(currentLat, currentLon, flight.latitude, flight.longitude);
        if (distance > radiusValue) return;
        
        const bearing = calculateBearing(currentLat, currentLon, flight.latitude, flight.longitude);
        const normalizedDistance = distance / radiusValue;
        const pointRadius = normalizedDistance * maxRadius;
        const angleRad = (90 - bearing) * Math.PI / 180;
        
        const x = centerX + pointRadius * Math.cos(angleRad);
        const y = centerY - pointRadius * Math.sin(angleRad);
        
        const dx = clickX - x;
        const dy = clickY - y;
        const clickDistance = Math.sqrt(dx * dx + dy * dy);
        
        if (clickDistance < closestDistance) {
            closestDistance = clickDistance;
            closestAircraft = flight;
        }
    });
    
    if (closestAircraft) {
        selectedAircraft = closestAircraft;
        
        if (typeof showFlightInfo === 'function') {
            showFlightInfo(closestAircraft);
        }
    } else {
        selectedAircraft = null;
    }
    
    if (currentFlights.length > 0) {
        updateRadarPoints(currentFlights);
    }
}

// Event Listeners
window.addEventListener('load', () => {
    initRadar();
    getLocation();
    
    const initialRadius = parseInt(document.getElementById("radiusValue").textContent);
    const maxRadius = 250;
    const progressPercentage = (initialRadius / maxRadius) * 100;
    const scanRangeProgress = document.getElementById("scanRangeProgress");
    if (scanRangeProgress) {
        scanRangeProgress.style.width = `${progressPercentage}%`;
    }
    
    updateLanguage("en");
});

window.addEventListener('resize', initRadar);

document.getElementById("refreshBtn").addEventListener("click", () => getFlights(currentLat, currentLon));

document.getElementById("languageSelect").addEventListener("change", function() {
    updateLanguage(this.value);
});

radiusSlider.addEventListener("input", function() {
    document.getElementById("radiusValue").textContent = this.value;
    document.getElementById("scanRange").textContent = this.value;
    getFlights(currentLat, currentLon);
});

document.getElementById("downloadBtn").addEventListener("click", function () {
    html2canvas(document.querySelector("#flightTable")).then((canvas) => {
        const link = document.createElement("a");
        link.download = "flight_table.jpg";
        link.href = canvas.toDataURL("image/jpeg");
        link.click();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    getLocation();
    initRadar();
    
    document.getElementById("scanRange").textContent = document.getElementById("radiusSlider").value;
    
    const flightInfoModal = document.getElementById("flightInfoModal");
    const closeModalButton = document.getElementById("closeModal");
    
    if (closeModalButton) {
        closeModalButton.addEventListener("click", function() {
            flightInfoModal.classList.add("hidden");
        });
    }
    
    document.getElementById("languageSelect").addEventListener("change", function() {
        updateLanguage(this.value);
    });
    
    document.getElementById("downloadBtn").addEventListener("click", function() {
        html2canvas(document.getElementById("flightTable")).then(canvas => {
            const link = document.createElement('a');
            link.download = 'flight_data.jpg';
            link.href = canvas.toDataURL('image/jpeg');
            link.click();
        });
    });
    
    document.getElementById("refreshBtn").addEventListener("click", function() {
        if (currentLat && currentLon) {
            getFlights(currentLat, currentLon);
        } else {
            getLocation();
        }
    });
    
    document.getElementById("trackFlightsBtn").addEventListener("click", function() {
        trackAllFlights();
    });
    
    document.getElementById("trackFlightBtn").addEventListener("click", function() {
        if (selectedAircraft) {
            trackFlight(selectedAircraft);
        }
    });
    
    updateLanguage(document.getElementById("languageSelect").value);
});

function trackAllFlights() {
    if (!currentFlights || currentFlights.length === 0) {
        return;
    }
    
    if (!window.trackingInterval) {
        window.trackingInterval = setInterval(() => {
            if (currentLat && currentLon) {
                getFlights(currentLat, currentLon);
            }
        }, 30000);
        
        const currentLang = document.getElementById('languageSelect').value;
        const t = translations[currentLang] || translations.en;
        const trackBtn = document.getElementById('trackFlightsBtn').querySelector('span');
        trackBtn.textContent = t.trackingActive || 'Tracking Active';
        
        document.getElementById('trackFlightsBtn').classList.add('active-tracking');
    } else {
        clearInterval(window.trackingInterval);
        window.trackingInterval = null;
        
        const currentLang = document.getElementById('languageSelect').value;
        const t = translations[currentLang] || translations.en;
        const trackBtn = document.getElementById('trackFlightsBtn').querySelector('span');
        trackBtn.textContent = t.trackFlights || 'Track All Flights';
        
        document.getElementById('trackFlightsBtn').classList.remove('active-tracking');
    }
}

function trackFlight(flight) {
    document.getElementById('flightInfoModal').classList.add('hidden');
    
    selectedAircraft = flight;
    
    updateRadarPoints(currentFlights);
    
    updateDistanceInformation(selectedAircraft, currentFlights);
    
    document.getElementById('radarContainer').scrollIntoView({ behavior: 'smooth' });
}

function showFlightInfo(flight) {
    if (!flight) return;
    
    const currentLang = document.getElementById('languageSelect').value;
    const t = translations[currentLang] || translations.en;
    
    document.getElementById('flightInfoTitle').textContent = 
        flight.callsign ? `${flight.callsign} ${t.flightInfo || 'Flight Information'}` : t.unknownFlight || 'Unknown Flight';
    
    const altitude = flight.altitude !== 'N/A' ? parseFloat(flight.altitude) : null;
    let altitudeLabel = t.unknown || 'Unknown';
    
    if (altitude !== null) {
        if (altitude < 3000) {
            altitudeLabel = t.lowAltitude || 'Low Altitude';
        } else if (altitude < 8000) {
            altitudeLabel = t.mediumAltitude || 'Medium Altitude';
        } else {
            altitudeLabel = t.highAltitude || 'High Altitude';
        }
    }
    
    const speed = flight.velocity !== 'N/A' ? parseFloat(flight.velocity) : null;
    let speedLabel = t.unknown || 'Unknown';
    
    if (speed !== null) {
        if (speed < 400) {
            speedLabel = t.lowSpeed || 'Low Speed';
        }
        else if (speed < 700) {
            speedLabel = t.mediumSpeed || 'Medium Speed';
        }
        else if (speed < 900) {
            speedLabel = t.highSpeed || 'High Speed';
        }
        else {
            speedLabel = t.veryHighSpeed || 'Very High Speed';
        }
    }
    
    const content = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-2">
                <div class="flex justify-between">
                    <span class="text-gray-500">${t.thCallsign || 'Callsign'}:</span>
                    <span class="font-medium">${flight.callsign || 'N/A'}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-gray-500">${t.thCountry || 'Country'}:</span>
                    <span class="font-medium">${flight.origin_country || 'N/A'}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-gray-500">${t.thAltitude || 'Altitude'}:</span>
                    <span class="font-medium">${flight.altitude || 'N/A'} <small>(${altitudeLabel})</small></span>
                </div>
                <div class="flex justify-between">
                    <span class="text-gray-500">${t.thSpeed || 'Speed'}:</span>
                    <span class="font-medium">${flight.velocity || 'N/A'} <small>(${speedLabel})</small></span>
                </div>
            </div>
            <div class="space-y-2">
                <div class="flex justify-between">
                    <span class="text-gray-500">${t.thDirection || 'Direction'}:</span>
                    <span class="font-medium">${flight.true_track || 'N/A'}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-gray-500">${t.thLatitude || 'Latitude'}:</span>
                    <span class="font-medium">${flight.latitude?.toFixed(4) || 'N/A'}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-gray-500">${t.thLongitude || 'Longitude'}:</span>
                    <span class="font-medium">${flight.longitude?.toFixed(4) || 'N/A'}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-gray-500">${t.distance || 'Distance'}:</span>
                    <span class="font-medium">${Math.round(flight.distanceFromCenter) || 'N/A'} km</span>
                </div>
            </div>
        </div>
        <div class="mt-4">
            <div class="flex justify-between items-center">
                <span class="text-gray-500">${t.progress || 'Progress'}:</span>
                <span class="text-sm">${flight.progress}% ${t.completed || 'completed'}</span>
            </div>
            <div class="progress-bar mt-2">
                <div class="progress-fill" style="width: ${flight.progress}%"></div>
            </div>
        </div>
        <div class="mt-4 text-gray-500 text-sm italic">
            ${t.trackingDev || 'Flight tracking feature is currently under development:'}
            <strong class="text-black">ICAO24: ${flight.icao24}</strong>
        </div>
    `;
    
    document.getElementById('flightInfoContent').innerHTML = content;
    document.getElementById('trackFlightBtn').textContent = t.trackFlight || 'Track Flight';
    document.getElementById('flightInfoModal').classList.remove('hidden');
}