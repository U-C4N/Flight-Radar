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

// const translations = { ... } // Bu kısmı önceki versiyondan kopyalayın

let currentLat, currentLon;
const radiusSlider = document.getElementById("radiusSlider");
const radiusValue = document.getElementById("radiusValue");
const canvas = document.getElementById('radarCanvas');
const ctx = canvas.getContext('2d');
let currentFlights = []; // Mevcut uçuşları saklayacak global değişken
let selectedAircraft = null;

function updateLanguage(lang) {
    const t = translations[lang] || translations.en;
    
    // Ana başlık ve etiketleri güncelle
    document.getElementById('mainTitle').textContent = t.mainTitle;
    document.getElementById('locationLabel').textContent = t.locationLabel;
    document.getElementById('radiusLabel').textContent = t.radiusLabel;
    document.getElementById('refreshBtn').querySelector('span').textContent = t.refreshLabel;
    document.getElementById('downloadBtn').querySelector('span').textContent = t.downloadLabel;
    document.getElementById('trackFlightsLabel').textContent = t.trackFlightsLabel;
    
    // Stat cards labels
    document.getElementById('monitoredFlightsLabel').textContent = t.monitoredFlightsLabel;
    document.getElementById('scanRangeLabel').textContent = t.scanRangeLabel;
    
    // Tablo başlıklarını güncelle
    document.getElementById('thCallsign').textContent = t.thCallsign;
    document.getElementById('thCountry').textContent = t.thCountry;
    document.getElementById('thAltitude').textContent = t.thAltitude;
    document.getElementById('thSpeed').textContent = t.thSpeed;
    document.getElementById('thDirection').textContent = t.thDirection;
    document.getElementById('thLatitude').textContent = t.thLatitude;
    document.getElementById('thLongitude').textContent = t.thLongitude;
    document.getElementById('thProgress').textContent = t.thProgress;
    
    // Mesafe bilgisi başlığını güncelle
    const distanceInfoTitle = document.getElementById('distanceInfoTitle');
    if (distanceInfoTitle) {
        distanceInfoTitle.textContent = t.distanceInfo || 'Distance Information';
    }
    
    // Mesafe bilgisini güncelle
    if (selectedAircraft) {
        updateDistanceInformation(selectedAircraft, currentFlights);
    } else {
        clearDistanceInformation();
    }
    
    // Update flight count label with translation
    updateFlightCount(lang);
}

function updateFlightCount(lang) {
    const flightCount = document.querySelector("#flightTable tbody").childElementCount;
    document.getElementById("flightCount").textContent = flightCount.toString();
    
    // Update the detailed flight count label
    const flightCountLabel = document.getElementById("flightCountLabel");
    if (flightCountLabel) {
        flightCountLabel.innerHTML = `${translations[lang].flightCountLabel} <span class="text-sky-600 font-bold">${flightCount}</span>`;
    }
    
    // Update the scan range progress bar based on current radius value
    const currentRadius = parseInt(document.getElementById("radiusValue").textContent);
    const maxRadius = 250; // Maximum range value
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
    
    // Add radar click event listener
    canvas.addEventListener('click', handleRadarClick);
    
    // Window resize event listener
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
    
    // Draw radar background with gradient
    const bgGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
    bgGradient.addColorStop(0, 'rgba(13, 71, 161, 0.1)');
    bgGradient.addColorStop(0.5, 'rgba(25, 118, 210, 0.05)');
    bgGradient.addColorStop(1, 'rgba(41, 182, 246, 0.02)');
    
    ctx.fillStyle = bgGradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw concentric circles
    for (let i = 1; i <= 4; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * (i / 4), 0, Math.PI * 2);
        ctx.strokeStyle = i % 2 === 0 ? 'rgba(3, 169, 244, 0.4)' : 'rgba(3, 169, 244, 0.2)';
        ctx.lineWidth = i % 2 === 0 ? 1.5 : 0.8;
        ctx.setLineDash(i % 2 === 0 ? [] : [5, 5]);
        ctx.stroke();
    }
    
    // Draw coordinate lines (N, S, E, W)
    ctx.beginPath();
    // Vertical line
    ctx.moveTo(centerX, centerY - radius);
    ctx.lineTo(centerX, centerY + radius);
    // Horizontal line
    ctx.moveTo(centerX - radius, centerY);
    ctx.lineTo(centerX + radius, centerY);
    ctx.strokeStyle = 'rgba(3, 169, 244, 0.3)';
    ctx.lineWidth = 1;
    ctx.setLineDash([]);
    ctx.stroke();
    
    // Add cardinal direction labels
    ctx.font = '14px Rajdhani, sans-serif';
    ctx.fillStyle = 'rgba(3, 169, 244, 0.9)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // North
    ctx.fillText('N', centerX, centerY - radius + 15);
    // South
    ctx.fillText('S', centerX, centerY + radius - 15);
    // East
    ctx.fillText('E', centerX + radius - 15, centerY);
    // West
    ctx.fillText('W', centerX - radius + 15, centerY);
    
    // Draw sweep line (radar animation)
    const now = Date.now();
    const angle = (now / 2000) % (Math.PI * 2); // Full rotation every 2 seconds
    
    const gradientLine = ctx.createLinearGradient(centerX, centerY, 
        centerX + Math.cos(angle) * radius, 
        centerY + Math.sin(angle) * radius);
    gradientLine.addColorStop(0, 'rgba(0, 230, 118, 0.8)');
    gradientLine.addColorStop(1, 'rgba(0, 230, 118, 0)');
    
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + Math.cos(angle) * radius, centerY + Math.sin(angle) * radius);
    ctx.strokeStyle = gradientLine;
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw glow at the end of the sweep line
    ctx.beginPath();
    ctx.arc(centerX + Math.cos(angle) * radius, centerY + Math.sin(angle) * radius, 3, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 230, 118, 0.8)';
    ctx.fill();
    
    // Add center point
    ctx.beginPath();
    ctx.arc(centerX, centerY, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(3, 169, 244, 0.8)';
    ctx.fill();
    
    // Continuous animation
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
    
    // Keep a reference to selected aircraft
    const selectedId = selectedAircraft ? selectedAircraft.icao24 : null;
    
    // Clear and redraw the radar base
    drawRadar();
    
    // Scale factor and radius value from slider
    const radiusValue = parseInt(document.getElementById("radiusValue").textContent);
    const radarRadius = radiusValue; // km
    
    // Get current user position
    const userLat = currentLat || 0;
    const userLon = currentLon || 0;
    
    // Draw flights on radar
    flights.forEach(flight => {
        // Calculate distance in km
        const distance = calculateDistance(userLat, userLon, flight.latitude, flight.longitude);
        
        // Skip if beyond radar range
        if (distance > radarRadius) return;
        
        // Calculate bearing/angle
        const bearing = calculateBearing(userLat, userLon, flight.latitude, flight.longitude);
        
        // Convert to radar coordinates
        const normalizedDistance = distance / radarRadius; // 0 to 1
        const pointRadius = normalizedDistance * maxRadius;
        const angleRad = (90 - bearing) * Math.PI / 180; // Convert bearing to radians, adjust for radar display
        
        const x = centerX + pointRadius * Math.cos(angleRad);
        const y = centerY - pointRadius * Math.sin(angleRad);
        
        // Check if it's the selected aircraft
        const isSelected = flight.icao24 === selectedId;
        
        // Draw the flight on radar
        drawAircraftPoint(ctx, flight, centerX, centerY, maxRadius, radarRadius, isSelected);
    });
    
    // Continue animation
    requestAnimationFrame(() => updateRadarPoints(flights));
}

function drawAircraftPoint(ctx, flight, centerX, centerY, maxRadius, radarRadius, isSelected = false) {
    // Get coordinates
    const userLat = currentLat || 0;
    const userLon = currentLon || 0;
    
    // Calculate distance and bearing
    const distance = calculateDistance(userLat, userLon, flight.latitude, flight.longitude);
    const bearing = calculateBearing(userLat, userLon, flight.latitude, flight.longitude);
    
    // Calculate position on radar
    const normalizedDistance = distance / radarRadius; // 0 to 1
    const pointRadius = normalizedDistance * maxRadius;
    const angleRad = (90 - bearing) * Math.PI / 180;
    
    const x = centerX + pointRadius * Math.cos(angleRad);
    const y = centerY - pointRadius * Math.sin(angleRad);
    
    // Determine color based on altitude
    let color;
    if (flight.altitude === "N/A") {
        color = 'rgba(200, 200, 200, 0.8)'; // Gray for unknown altitude
    } else {
        const altitude = parseFloat(flight.altitude);
        if (altitude < 3000) color = 'rgba(46, 204, 113, 0.9)'; // Green for low altitude
        else if (altitude < 8000) color = 'rgba(241, 196, 15, 0.9)'; // Yellow for medium altitude
        else if (altitude < 12000) color = 'rgba(230, 126, 34, 0.9)'; // Orange for high altitude
        else color = 'rgba(231, 76, 60, 0.9)'; // Red for very high altitude
    }
    
    // Draw the flight marker
    ctx.save();
    
    // Draw direction indicator (aircraft heading)
    if (flight.true_track && flight.true_track !== "N/A") {
        const heading = parseFloat(flight.true_track);
        const headingRad = (90 - heading) * Math.PI / 180;
        
        ctx.translate(x, y);
        ctx.rotate(-headingRad); // Negative because canvas Y-axis is inverted
        
        // Draw triangle pointing in aircraft direction
        const size = isSelected ? 12 : 8;
        
        ctx.beginPath();
        ctx.moveTo(0, -size);
        ctx.lineTo(-size/2, size/2);
        ctx.lineTo(size/2, size/2);
        ctx.closePath();
        
        ctx.fillStyle = color;
        ctx.fill();
        
        if (isSelected) {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.lineWidth = 2;
            ctx.stroke();
            
            // Add pulsing effect for selected aircraft
            const pulseSize = 16 + Math.sin(Date.now() / 200) * 4;
            ctx.beginPath();
            ctx.arc(0, 0, pulseSize, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.lineWidth = 1.5;
            ctx.stroke();
        }
    } else {
        // Fallback to circle if no heading data
        ctx.beginPath();
        ctx.arc(x, y, isSelected ? 8 : 5, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        
        if (isSelected) {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.lineWidth = 2;
            ctx.stroke();
            
            // Add pulsing effect for selected aircraft
            const pulseSize = 12 + Math.sin(Date.now() / 200) * 3;
            ctx.beginPath();
            ctx.arc(x, y, pulseSize, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.lineWidth = 1.5;
            ctx.stroke();
        }
    }
    
    // Add velocity-based trail effect for high-speed aircraft
    if (flight.velocity && flight.velocity !== "N/A") {
        const velocity = parseFloat(flight.velocity);
        if (velocity > 700) {
            // Draw speed trail
            ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
            
            const trailLength = Math.min(20, velocity / 40);
            const trailAngle = (bearing + 180) % 360; // Opposite direction of movement
            const trailRad = (90 - trailAngle) * Math.PI / 180;
            
            const gradient = ctx.createLinearGradient(
                x, y,
                x + Math.cos(trailRad) * trailLength,
                y - Math.sin(trailRad) * trailLength
            );
            
            gradient.addColorStop(0, color);
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(
                x + Math.cos(trailRad) * trailLength, 
                y - Math.sin(trailRad) * trailLength
            );
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 3;
            ctx.stroke();
        }
    }
    
    ctx.restore();
    
    // Add callsign label for selected aircraft
    if (isSelected) {
        ctx.font = 'bold 12px Rajdhani, sans-serif';
        ctx.fillStyle = 'white';
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
        row.className = "flight-row hover:bg-slate-700 transition-all cursor-pointer border-b border-slate-700 text-slate-200";
        row.setAttribute("data-icao", flight.icao24);
        
        // ICAO24
        const icaoCell = row.insertCell();
        icaoCell.textContent = flight.icao24;
        icaoCell.className = "px-4 py-3 font-mono text-xs text-sky-400";
        
        // Callsign
        const callsignCell = row.insertCell();
        callsignCell.textContent = flight.callsign;
        callsignCell.className = "px-4 py-3 font-medium";
        
        // Country
        const countryCell = row.insertCell();
        countryCell.textContent = flight.origin_country;
        countryCell.className = "px-4 py-3";
        
        // Altitude
        const altitudeCell = row.insertCell();
        altitudeCell.textContent = flight.altitude;
        let altitudeClass = "px-4 py-3";
        if (flight.altitude !== "N/A") {
            const altitude = parseFloat(flight.altitude);
            if (altitude < 3000) altitudeClass += " text-green-400";
            else if (altitude < 8000) altitudeClass += " text-yellow-400";
            else if (altitude < 12000) altitudeClass += " text-orange-400";
            else altitudeClass += " text-red-400";
        }
        altitudeCell.className = altitudeClass;
        
        // Velocity
        const velocityCell = row.insertCell();
        let velocityClass = "px-4 py-3";
        if (flight.velocity !== "N/A") {
            const velocity = parseFloat(flight.velocity);
            if (velocity < 400) {
                velocityCell.textContent = flight.velocity;
                velocityClass += " text-blue-400";
            }
            else if (velocity < 700) {
                velocityCell.textContent = flight.velocity;
                velocityClass += " text-green-400";
            }
            else if (velocity < 900) {
                velocityCell.textContent = flight.velocity;
                velocityClass += " text-yellow-400";
            }
            else {
                velocityCell.innerHTML = `${flight.velocity} <span class="inline-block ml-1">⚡</span>`;
                velocityClass += " text-red-400";
            }
        } else {
            velocityCell.textContent = flight.velocity;
        }
        velocityCell.className = velocityClass;
        
        // True Track
        const trackCell = row.insertCell();
        trackCell.textContent = flight.true_track;
        trackCell.className = "px-4 py-3";
        
        // Latitude
        const latCell = row.insertCell();
        latCell.textContent = flight.latitude.toFixed(4);
        latCell.className = "px-4 py-3 font-mono text-xs";
        
        // Longitude
        const lonCell = row.insertCell();
        lonCell.textContent = flight.longitude.toFixed(4);
        lonCell.className = "px-4 py-3 font-mono text-xs";
        
        // Progress
        const progressCell = row.insertCell();
        const progressBarHtml = `
            <div class="flex items-center">
                <div class="w-full bg-slate-700 rounded-full h-2 mr-2">
                    <div class="bg-gradient-to-r from-sky-500 to-blue-600 h-2 rounded-full" style="width: ${flight.progress}%"></div>
                </div>
                <span class="text-xs text-sky-400">${flight.progress}%</span>
            </div>
        `;
        progressCell.innerHTML = progressBarHtml;
        progressCell.className = "px-4 py-3";
        
        // Add special flight highlight if needed
        if (flight.callsign && flight.callsign.includes("UAE")) {
            row.classList.add("special-flight");
            document.getElementById("specialFlightAlert").classList.remove("hidden");
        }
        
        // Add click handler
        row.addEventListener('click', function() {
            showFlightInfo(flight);
        });
    });
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Dünya'nın yarıçapı (km)
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

// Handle radar click to select aircraft
function handleRadarClick(event) {
    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxRadius = Math.min(canvas.width, canvas.height) / 2 - 10;
    const radiusValue = parseInt(document.getElementById("radiusValue").textContent);
    
    // Find clicked aircraft
    let closestAircraft = null;
    let closestDistance = 20; // Maximum detection radius in pixels
    
    currentFlights.forEach(flight => {
        const distance = calculateDistance(currentLat, currentLon, flight.latitude, flight.longitude);
        if (distance > radiusValue) return; // Skip if beyond radar range
        
        const bearing = calculateBearing(currentLat, currentLon, flight.latitude, flight.longitude);
        const normalizedDistance = distance / radiusValue;
        const pointRadius = normalizedDistance * maxRadius;
        const angleRad = (90 - bearing) * Math.PI / 180;
        
        const x = centerX + pointRadius * Math.cos(angleRad);
        const y = centerY - pointRadius * Math.sin(angleRad);
        
        // Calculate distance from click to aircraft point
        const dx = clickX - x;
        const dy = clickY - y;
        const clickDistance = Math.sqrt(dx * dx + dy * dy);
        
        if (clickDistance < closestDistance) {
            closestDistance = clickDistance;
            closestAircraft = flight;
        }
    });
    
    if (closestAircraft) {
        // Set as selected aircraft
        selectedAircraft = closestAircraft;
        
        // Show flight info if there's a display function
        if (typeof showFlightInfo === 'function') {
            showFlightInfo(closestAircraft);
        }
    } else {
        // Deselect if clicking on empty space
        selectedAircraft = null;
    }
    
    // Redraw radar with selection
    if (currentFlights.length > 0) {
        updateRadarPoints(currentFlights);
    }
}

// Event Listeners
window.addEventListener('load', () => {
    initRadar();
    getLocation();
    
    // Initialize the scan range progress bar
    const initialRadius = parseInt(document.getElementById("radiusValue").textContent);
    const maxRadius = 250;
    const progressPercentage = (initialRadius / maxRadius) * 100;
    const scanRangeProgress = document.getElementById("scanRangeProgress");
    if (scanRangeProgress) {
        scanRangeProgress.style.width = `${progressPercentage}%`;
    }
    
    updateLanguage("en"); // Set default language to English
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
    // Initialize location and radar
    getLocation();
    initRadar();
    
    // Set initial scanRange value
    document.getElementById("scanRange").textContent = document.getElementById("radiusSlider").value;
    
    // Modal functionality
    const flightInfoModal = document.getElementById("flightInfoModal");
    const closeModalButton = document.getElementById("closeModal");
    
    if (closeModalButton) {
        closeModalButton.addEventListener("click", function() {
            flightInfoModal.classList.add("animate__fadeOut");
            setTimeout(() => {
                flightInfoModal.classList.remove("animate__fadeOut");
                flightInfoModal.classList.add("hidden");
            }, 300);
        });
    }
    
    // Language selector
    document.getElementById("languageSelect").addEventListener("change", function() {
        updateLanguage(this.value);
    });
    
    // Download button
    document.getElementById("downloadBtn").addEventListener("click", function() {
        html2canvas(document.getElementById("flightTable")).then(canvas => {
            const link = document.createElement('a');
            link.download = 'flight_data.jpg';
            link.href = canvas.toDataURL('image/jpeg');
            link.click();
        });
    });
    
    // Refresh button
    document.getElementById("refreshBtn").addEventListener("click", function() {
        if (currentLat && currentLon) {
            getFlights(currentLat, currentLon);
        } else {
            getLocation();
        }
    });
    
    // Track All Flights button
    document.getElementById("trackFlightsBtn").addEventListener("click", function() {
        trackAllFlights();
    });
    
    // Track Flight button
    document.getElementById("trackFlightBtn").addEventListener("click", function() {
        if (selectedAircraft) {
            trackFlight(selectedAircraft);
        }
    });
    
    // Initial language update
    updateLanguage(document.getElementById("languageSelect").value);
});

// Track All Flights function
function trackAllFlights() {
    if (!currentFlights || currentFlights.length === 0) {
        return;
    }
    
    // Set up auto-refresh interval if not already set
    if (!window.trackingInterval) {
        window.trackingInterval = setInterval(() => {
            if (currentLat && currentLon) {
                const radius = parseInt(document.getElementById('radiusSlider').value);
                getFlights(currentLat, currentLon, radius);
            }
        }, 30000); // Refresh every 30 seconds
        
        // Update button text to show tracking is active
        const currentLang = document.getElementById('languageSelect').value;
        const t = translations[currentLang] || translations.en;
        const trackBtn = document.getElementById('trackFlightsBtn').querySelector('span');
        trackBtn.textContent = t.trackingActive || 'Tracking Active';
        
        // Add active class to button
        document.getElementById('trackFlightsBtn').classList.add('active-tracking');
    } else {
        // If already tracking, stop tracking
        clearInterval(window.trackingInterval);
        window.trackingInterval = null;
        
        // Update button text
        const currentLang = document.getElementById('languageSelect').value;
        const t = translations[currentLang] || translations.en;
        const trackBtn = document.getElementById('trackFlightsBtn').querySelector('span');
        trackBtn.textContent = t.trackFlights || 'Track All Flights';
        
        // Remove active class
        document.getElementById('trackFlightsBtn').classList.remove('active-tracking');
    }
}

// Track a single flight
function trackFlight(flight) {
    // Hide the modal
    document.getElementById('flightInfoModal').classList.add('hidden');
    
    // Keep the selected aircraft
    selectedAircraft = flight;
    
    // Update the radar to highlight the selected aircraft
    updateRadarPoints(currentFlights);
    
    // Update the distance information panel
    updateDistanceInformation(selectedAircraft, currentFlights);
    
    // Scroll to radar
    document.getElementById('radarContainer').scrollIntoView({ behavior: 'smooth' });
}

// Show flight info in the modal
function showFlightInfo(flight) {
    if (!flight) return;
    
    const currentLang = document.getElementById('languageSelect').value;
    const t = translations[currentLang] || translations.en;
    
    document.getElementById('flightInfoTitle').textContent = 
        flight.callsign ? `${flight.callsign} ${t.flightInfo || 'Flight Information'}` : t.unknownFlight || 'Unknown Flight';
    
    const altitude = flight.altitude !== 'N/A' ? parseFloat(flight.altitude) : null;
    let altitudeClass = '';
    let altitudeLabel = t.unknown || 'Unknown';
    
    if (altitude !== null) {
        if (altitude < 3000) {
            altitudeClass = 'text-emerald-500';
            altitudeLabel = t.lowAltitude || 'Low Altitude';
        } else if (altitude < 8000) {
            altitudeClass = 'text-yellow-500';
            altitudeLabel = t.mediumAltitude || 'Medium Altitude';
        } else {
            altitudeClass = 'text-red-500';
            altitudeLabel = t.highAltitude || 'High Altitude';
        }
    }
    
    const speed = flight.velocity !== 'N/A' ? parseFloat(flight.velocity) : null;
    let speedClass = '';
    let speedLabel = t.unknown || 'Unknown';
    
    if (speed !== null) {
        if (speed < 400) {
            speedClass = 'text-blue-500';
            speedLabel = t.lowSpeed || 'Low Speed';
        }
        else if (speed < 700) {
            speedClass = 'text-yellow-500';
            speedLabel = t.mediumSpeed || 'Medium Speed';
        }
        else if (speed < 900) {
            speedClass = 'text-orange-500';
            speedLabel = t.highSpeed || 'High Speed';
        }
        else {
            speedClass = 'text-red-500';
            speedLabel = t.veryHighSpeed || 'Very High Speed';
        }
    }
    
    // Format the content for the modal
    const content = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-2">
                <div class="flex justify-between">
                    <span class="text-slate-500">${t.thCallsign || 'Callsign'}:</span>
                    <span class="font-medium">${flight.callsign || 'N/A'}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-slate-500">${t.thCountry || 'Country'}:</span>
                    <span class="font-medium">${flight.origin_country || 'N/A'}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-slate-500">${t.thAltitude || 'Altitude'}:</span>
                    <span class="font-medium ${altitudeClass}">${flight.altitude || 'N/A'} <small>(${altitudeLabel})</small></span>
                </div>
                <div class="flex justify-between">
                    <span class="text-slate-500">${t.thSpeed || 'Speed'}:</span>
                    <span class="font-medium ${speedClass}">${flight.velocity || 'N/A'} <small>(${speedLabel})</small></span>
                </div>
            </div>
            <div class="space-y-2">
                <div class="flex justify-between">
                    <span class="text-slate-500">${t.thDirection || 'Direction'}:</span>
                    <span class="font-medium">${flight.true_track || 'N/A'}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-slate-500">${t.thLatitude || 'Latitude'}:</span>
                    <span class="font-medium">${flight.latitude?.toFixed(4) || 'N/A'}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-slate-500">${t.thLongitude || 'Longitude'}:</span>
                    <span class="font-medium">${flight.longitude?.toFixed(4) || 'N/A'}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-slate-500">${t.distance || 'Distance'}:</span>
                    <span class="font-medium">${Math.round(flight.distanceFromCenter) || 'N/A'} km</span>
                </div>
            </div>
        </div>
        <div class="mt-4">
            <div class="flex justify-between items-center">
                <span class="text-slate-500">${t.progress || 'Progress'}:</span>
                <span class="text-sm">${flight.progress}% ${t.completed || 'completed'}</span>
            </div>
            <div class="progress-bar mt-2">
                <div class="progress-fill" style="width: ${flight.progress}%"></div>
            </div>
        </div>
        <div class="mt-4 text-slate-500 text-sm italic">
            ${t.trackingDev || 'Flight tracking feature is currently under development:'}
            <strong class="text-sky-600">ICAO24: ${flight.icao24}</strong>
        </div>
    `;
    
    document.getElementById('flightInfoContent').innerHTML = content;
    document.getElementById('trackFlightBtn').textContent = t.trackFlight || 'Track Flight';
    document.getElementById('flightInfoModal').classList.remove('hidden');
}