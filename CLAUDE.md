# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Flutter web application for a serious game (educational/training game) with an interactive room-based interface. The application is built as a Flutter web project that compiles to JavaScript and runs in browsers.

## Architecture

### Core Structure
- **Flutter Web App**: Built with Flutter framework, compiled to web
- **Asset Management**: Extensive use of images, icons, and fonts stored in `assets/`
- **Configuration-Driven**: Room layouts and interactive elements defined in `assets/assets/configuration.json`
- **Multi-Room Interface**: Interactive rooms with polygonal clickable areas

### Key Components
- **Room System**: Interactive rooms defined by polygon coordinates in configuration
- **Asset Pipeline**: Images, icons, and fonts managed through Flutter's asset system
- **Web Deployment**: Configured for web deployment with proper base href setup

### Configuration System
The `assets/assets/configuration.json` file defines:
- Room layouts with polygon coordinates
- Interactive elements and their properties
- Room metadata (titles, descriptions, types)
- Visual styling (colors, borders)

## Development Commands

This is a Flutter web project. Use Flutter CLI commands:

```bash
# Serve development version
flutter run -d chrome

# Build for production
flutter build web

# Clean build artifacts
flutter clean

# Get dependencies
flutter pub get

# Run tests
flutter test
```

## File Structure

- `assets/` - All game assets (images, icons, fonts, configuration)
- `canvaskit/` - Flutter's CanvasKit rendering engine files
- `index.html` - Entry point for web app
- `main.dart.js` - Compiled Dart code
- `manifest.json` - Web app manifest
- `flutter_service_worker.js` - Service worker for PWA functionality

## Development Notes

### Assets
- Game uses extensive image assets for rooms and UI elements
- Icons are stored in `assets/icons/` and `assets/images/`
- Custom fonts (Kanit family) in `assets/fonts/`
- Configuration file drives room layouts and interactions

### Web Deployment
- Base href set to `/FrontSeriousGame/` in index.html
- Configured as Progressive Web App (PWA)
- Uses Flutter's web rendering with CanvasKit

### Interactive Elements
- Rooms defined by polygon coordinates in configuration
- Clickable areas mapped to specific room functions
- Visual feedback through fill and border colors