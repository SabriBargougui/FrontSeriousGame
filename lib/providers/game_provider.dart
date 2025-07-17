import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:flutter/services.dart';
import '../models/game_config.dart';

class GameProvider extends ChangeNotifier {
  GameConfig? _gameConfig;
  int _currentStep = 1;
  int _currentRoom = 1;
  int _currentQuestion = 1;
  bool _isLoading = true;
  String? _error;

  GameConfig? get gameConfig => _gameConfig;
  int get currentStep => _currentStep;
  int get currentRoom => _currentRoom;
  int get currentQuestion => _currentQuestion;
  bool get isLoading => _isLoading;
  String? get error => _error;

  GameProvider() {
    loadGameConfiguration();
  }

  Future<void> loadGameConfiguration() async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      final String configString = await rootBundle.loadString('assets/configuration.json');
      final Map<String, dynamic> configData = json.decode(configString);
      
      _gameConfig = GameConfig.fromJson(configData);
      _isLoading = false;
      notifyListeners();
    } catch (e) {
      _error = 'Failed to load game configuration: $e';
      _isLoading = false;
      notifyListeners();
    }
  }

  void setCurrentStep(int step) {
    if (step >= 1 && step <= 4) {
      _currentStep = step;
      notifyListeners();
    }
  }

  void setCurrentRoom(int room) {
    if (room >= 1 && room <= 4) {
      _currentRoom = room;
      notifyListeners();
    }
  }

  void setCurrentQuestion(int question) {
    if (question >= 1 && question <= 8) {
      _currentQuestion = question;
      notifyListeners();
    }
  }

  void nextStep() {
    if (_currentStep < 4) {
      _currentStep++;
      notifyListeners();
    }
  }

  void previousStep() {
    if (_currentStep > 1) {
      _currentStep--;
      notifyListeners();
    }
  }

  void nextRoom() {
    if (_currentRoom < 4) {
      _currentRoom++;
      notifyListeners();
    }
  }

  void previousRoom() {
    if (_currentRoom > 1) {
      _currentRoom--;
      notifyListeners();
    }
  }

  void nextQuestion() {
    if (_currentQuestion < 8) {
      _currentQuestion++;
      notifyListeners();
    }
  }

  void previousQuestion() {
    if (_currentQuestion > 1) {
      _currentQuestion--;
      notifyListeners();
    }
  }

  void reset() {
    _currentStep = 1;
    _currentRoom = 1;
    _currentQuestion = 1;
    notifyListeners();
  }
}