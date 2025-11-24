import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { useState, useEffect } from 'react';



const Start = ({ navigation }) => {
  const [name, setName] = useState('');
  const [selectedColor, setSelectedColor] = useState();
  const colorOptions = ["#090C08", "#474056", "#8A95A5", "#B9C4AE"];
  const colorLabels = ["Black", "Purple", "Blue", "Green"];

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <ImageBackground
      style={styles.bgImage}
      source={require("../assets/background-image.png")}
      resizeMode="cover"
    >
      <Text style={styles.title}>Let's Chat!
      </Text>

      {/* White background container.  Each element has its own container for responsiveness */}
      <View style={styles.container}>

        {/* Text input container */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder='Your Name'
          />
        </View>

        {/* Color selector container */}
        <View style={styles.colorContainer}>
          <Text style={styles.colorText}>Choose a Background Color</Text>
          <View style={styles.colorButtonContainer}>
            {colorOptions.map((color) => (
              <TouchableOpacity
                key={color}
                title="Go to Screen 2"
                style={[
                  styles.colorButton,
                  { backgroundColor: color },
                  selectedColor === color && {
                    borderWidth: 3,
                    borderColor: '#757083',
                  },
                ]}
                onPress={() => setSelectedColor(color)}
              />
            ))}
          </View>
        </View>

        {/* "Start chatting" button container */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Chat', { name: name, color: selectedColor })}
          >
            <Text style={styles.buttonText}>Start Chatting</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Keyboard adjustments for iOS */}
      {Platform.OS === 'ios' ? <KeyboardAvoidingView behavior="padding" /> : null}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
  },
  title: {
    fontSize: 45,
    fontWeight: "600",
    color: "#FFFFFF",
    height: "35%",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "88%",
    backgroundColor: "#ffffff",
    height: "35%",
  },
  inputContainer: {
    flex: 1,
    width: "88%",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    opacity: 1,
  },
  colorContainer: {
    flex: 1,
    width: "88%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  colorText: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    opacity: 1,
    marginBottom: 15,
  },
  colorButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  colorButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  buttonContainer: {
    flex: 1,
    width: "88%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 15,
    backgroundColor: "#757083",
    width: "100%",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default Start;