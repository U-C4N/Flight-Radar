# Flight-Radar v1.3 ✈️

Flight-Radar is a multilingual web application that tracks and displays real-time flight data using the OpenSky Network API. Built with Python Flask, this application offers an interactive interface for viewing nearby flights with various customization options.

![Flight-Radar Screenshot](/readme.jpg)

## Features

- Real-time flight tracking using OpenSky Network API
- Multilingual support (English, Russian, German, Turkish, Spanish, French)
- Automatic location detection for nearby flight information
- Adjustable search radius
- Enhanced radar display with animated sweep and interactive aircraft visualization
- Visual indicators for flight speed and altitude
- Modern UI design with responsive stat cards
- Detailed flight information popup on radar click
- Interactive table displaying flight details
- Download flight data as JPG
- Audio notification for new detected flights
- Dark/Light mode toggle
- Responsive design for various devices
- Multilingual Progress Bar: Added a progress bar for each flight in the table, showing estimated flight progress
- Dynamic Language Updates: The interface now updates dynamically when changing the language, including the new progress bar labels
- Enhanced Flight Information: The flight information popup now displays all details in the selected language
- Improved Radar Interaction: The radar display now provides more accurate and responsive flight point selection
- Optimized Performance: Improved the overall performance of the application, especially for handling multiple flights

## Recent Updates

### Version 1.3 🎯
- **Code Organization**: Separated CSS styles into external `styles.css` file for better maintainability and performance
- **Project Structure**: Improved file organization with dedicated static files for styles
- **Performance Enhancement**: CSS file can now be cached separately, improving page load times
- **Developer Experience**: Cleaner HTML structure with separated concerns

### Previous Updates
- **Enhanced Radar Visualization**: Completely redesigned radar with animated sweep line, cardinal directions, concentric circles, and color-coded aircraft based on altitude
- **Fast Flight Indicators**: Added lightning emoji (⚡) next to flights with speeds over 800 km/h for quick visual identification
- **Improved Stat Cards**: Redesigned the UI of the stat cards with icons, better spacing, and visual progress bar for scan range
- **Full Language Support**: Fixed language inconsistencies throughout the application for a seamless multilingual experience
- **Visual Aircraft Trails**: Added speed trails behind fast-moving aircraft in the radar visualization
- **Direction Indicators**: Aircraft on radar now show their actual heading direction
- **Dynamic Aircraft Selection**: Enhanced aircraft selection with visual highlighting and detailed information display

## Project Structure

```
Flight-Radar/
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── LICENSE               # MIT License
├── README.md            # Project documentation
├── readme.jpg           # Screenshot
├── static/
│   ├── scripts.js       # JavaScript functionality
│   └── styles.css       # CSS styles (v1.3+)
└── templates/
    └── index.html       # Main HTML template
```

## Installation

Follow these steps to run the project on your local machine:

1. Clone the repository:
    ```
    git clone https://github.com/U-C4N/Flight-Radar.git
    cd Flight-Radar
    ```

2. Create and activate a virtual Python environment:
    ```
    python -m venv venv
    source venv/bin/activate  # For Windows: venv\Scripts\activate
    ```

3. Install the required packages:
    ```
    pip install -r requirements.txt
    ```

4. Run the application:
    ```
    python app.py
    ```

5. Open your browser and go to `http://127.0.0.1:5000` to start using the application.

## Usage

1. Allow location access when prompted to view nearby flights.
2. Use the language selector to change the interface language.
3. Adjust the search radius using the slider to view more or fewer flights.
4. Click on flight points in the radar to view detailed flight information.
5. Click the "Refresh Flights" button to update the flight data.
6. Use the "Download Table as JPG" button to save the current flight data as an image.
7. Toggle between dark and light modes using the theme switch.
8. Look for the lightning emoji (⚡) next to speeds to identify very fast aircraft (over 800 km/h).

## Acknowledgments

- [Flask](https://flask.palletsprojects.com/) - Web framework
- [OpenSky Network API](https://opensky-network.org/apidoc/) - Flight data provider
- [TailwindCSS](https://tailwindcss.com/) - CSS framework for styling
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - For interactive features

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

<p align="left">
<b>Umutcan Edizaslan:</b>
<a href="https://github.com/U-C4N" target="blank"><img align="center" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Github-Dark.svg" alt="TutTrue" height="30" width="40" /></a>
<a href="https://x.com/UEdizaslan" target="blank"><img align="center" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Twitter.svg" height="30" width="40" /></a>
<a href="https://discord.gg/2Tutcj6u" target="blank"><img align="center" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Discord.svg" height="30" width="40" /></a>
</p>
