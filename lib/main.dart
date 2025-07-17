import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'screens/home_screen.dart';
import 'providers/game_provider.dart';
import 'utils/responsive_utils.dart';

void main() {
  runApp(const SeriousGameApp());
}

class SeriousGameApp extends StatelessWidget {
  const SeriousGameApp({super.key});

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (context) => GameProvider(),
      child: MaterialApp(
        title: 'Serious Game',
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          primarySwatch: Colors.blue,
          fontFamily: 'Kanit',
          useMaterial3: true,
          colorScheme: ColorScheme.fromSeed(
            seedColor: const Color(0xFF0175C2),
          ),
        ),
        home: const ResponsiveHome(),
      ),
    );
  }
}

class ResponsiveHome extends StatelessWidget {
  const ResponsiveHome({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ResponsiveContainer(
        child: ResponsiveWidget(
          mobile: const HomeScreen(isMobile: true),
          tablet: const HomeScreen(isMobile: false),
          desktop: const HomeScreen(isMobile: false),
          largeDesktop: const HomeScreen(isMobile: false),
        ),
      ),
    );
  }
}