import { Colors, Gradients } from '@/constants/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import 'react-native-reanimated';

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        // Simulated loading (initialize database, load assets, etc.)
        // await initDatabase();
        // await resetDatabase();
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsReady(true);
      } catch (e) {
        console.warn(e);
        setIsReady(true);
      }
    };

    prepare();
  }, []);

  if (!isReady) {
    return (
      <LinearGradient
        colors={Gradients.primary as [string, string]}
        style={styles.splashContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.splashContent}>
          <Image style={styles.splashEmoji}
            source={require("@/assets/images/icon-new.png")}
            width={200}
            height={200}
          />
          {/* <Text style={styles.splashTitle}>EduHero</Text> */}
          <Text style={styles.splashSubtitle}>Belajar Jadi Seru!</Text>
          <ActivityIndicator size="large" color="#fff" style={styles.loader} />
        </View>
      </LinearGradient>
    );
  }

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          contentStyle: { backgroundColor: Colors.light.background },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen
          name="quiz"
          options={{
            animation: 'slide_from_bottom',
            presentation: 'card',
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashContent: {
    alignItems: 'center',
  },
  splashEmoji: {
    fontSize: 80,
    marginBottom: 16,
  },
  splashTitle: {
    fontSize: 42,
    fontWeight: '800',
    color: '#fff',
    letterSpacing: 2,
  },
  splashSubtitle: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 8,
  },
  loader: {
    marginTop: 40,
  },
});
