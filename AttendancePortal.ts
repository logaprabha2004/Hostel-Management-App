import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  ActivityIndicator,
  Modal,
  Share
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const WelcomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Welcome to Hostel Management</Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
      <Text style={styles.buttonText}>Get Started</Text>
    </TouchableOpacity>
  </View>
);

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      navigation.navigate('RoleSelection');
    } else {
      alert('Please enter Email and Password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const RoleSelectionScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Select Your Role</Text>
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("StudentModule")}>
      <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/9815/9815472.png" }} style={styles.icon} />
      <Text style={styles.cardText}>Student Portal</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("StaffModule")}>
      <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/9815/9815472.png" }} style={styles.icon} />
      <Text style={styles.cardText}>Staff Portal</Text>
    </TouchableOpacity>
  </View>
);

const StudentModule = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Student Portal</Text>
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("StudentProfile")}>
      <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/9815/9815472.png" }} style={styles.icon} />
      <Text style={styles.cardText}>Profile</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("StudentAttendance")}>
      <Image source={{ uri: "https://static.vecteezy.com/system/resources/previews/020/701/066/non_2x/attendance-icon-design-free-vector.jpg" }} style={styles.icon} />
      <Text style={styles.cardText}>Mark Attendance</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("StudentLeaveOuting")}>
      <Image source={{ uri: "https://static.vecteezy.com/system/resources/previews/020/701/066/non_2x/attendance-icon-design-free-vector.jpg" }} style={styles.icon} />
      <Text style={styles.cardText}>Leave & Outing</Text>
    </TouchableOpacity>
  </View>
);

const StaffModule = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Staff Portal</Text>
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("AttendanceMonitoring")}
    >
      <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/9815/9815472.png" }} style={styles.icon} />
      <Text style={styles.cardText}>Attendance Monitoring</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("StaffLeaveOuting")}>
      <Image source={{ uri: "https://static.vecteezy.com/system/resources/previews/020/701/066/non_2x/attendance-icon-design-free-vector.jpg" }} style={styles.icon} />
      <Text style={styles.cardText}>Leave & Outing</Text>
    </TouchableOpacity>
  </View>
);

const AttendanceMonitoringScreen = ({ navigation }) => {
  const [subScreen, setSubScreen] = useState("start"); // 'start' or 'report'
  const [division, setDivision] = useState("Div - 1");
  const [group, setGroup] = useState("Group 2");
  const [isDownloading, setIsDownloading] = useState(false);

  const total = 50;
  const present = 30;
  const absent = total - present;

  const startAttendance = () => setSubScreen("report");

  const downloadReport = () => {
    setIsDownloading(true);
    setTimeout(async () => {
      const content =
        `Attendance Report\n\n` +
        `Division: ${division}\nGroup: ${group}\n\n` +
        `Total Students: ${total}\nPresent: ${present}\nAbsent: ${absent}\n` +
        `Date: ${new Date().toLocaleString()}`;
      await Share.share({ title: "Attendance Report", message: content });
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      {subScreen === "start" && (
        <View style={styles.card}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/4413/4413835.png" }}
            style={styles.image}
          />
          <Text style={styles.title}>Take Attendance</Text>
          <TextInput
            style={styles.input}
            value={division}
            onChangeText={setDivision}
            placeholder="Division"
          />
          <TextInput
            style={styles.input}
            value={group}
            onChangeText={setGroup}
            placeholder="Group"
          />
          <TouchableOpacity style={styles.button} onPress={startAttendance}>
            <Text style={styles.buttonText}>Start Attendance Session</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#007acc" }]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      )}

      {subScreen === "report" && (
        <View style={styles.card}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/6201/6201672.png" }}
            style={styles.image}
          />
          <Text style={styles.title}>Attendance Report</Text>
          <Text style={styles.statText}>
            <Text style={styles.purple}>Students</Text>: {total}
          </Text>
          <Text style={styles.statText}>
            <Text style={styles.green}>Present</Text>: {present}
          </Text>
          <Text style={styles.statText}>
            <Text style={styles.red}>Absent</Text>: {absent}
          </Text>
          <TouchableOpacity style={styles.button} onPress={downloadReport}>
            <Text style={styles.buttonText}>Download Report</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#007acc" }]}
            onPress={() => {
              setSubScreen("start");
              navigation.goBack();
            }}
          >
            <Text style={styles.buttonText}>Finish</Text>
          </TouchableOpacity>
        </View>
      )}

      <Modal transparent visible={isDownloading}>
        <View style={styles.modalOverlay}>
          <View style={styles.modal}>
            <ActivityIndicator size="large" color="#00796b" />
            <Text style={{ marginVertical: 10, fontWeight: "bold" }}>Creating Report...</Text>
            <Text>{new Date().toLocaleString()}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const StudentLeaveOuting = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Leave & Outing Request</Text>
    <TextInput style={styles.input} placeholder="Outing or Leave" />
    <TextInput style={styles.input} placeholder="Start Date & Time" />
    <TextInput style={styles.input} placeholder="Return Date & Time" />
    <TextInput style={styles.input} placeholder="Reason" />
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Attach Document</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <Text style={styles.buttonText}>Back</Text>
    </TouchableOpacity>
  </View>
);

const StudentProfile = ({ navigation }) => {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Profile</Text>
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Roll No." value={rollNo} onChangeText={setRollNo} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const StudentAttendance = ({ navigation }) => {
  const [marked, setMarked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleMarkAttendance = () => {
    setLoading(true);
    setTimeout(() => {
      setMarked(true);
      setLoading(false);
    }, 2000);
  };

  const currentTime = new Date().toLocaleTimeString();
  const currentDate = new Date().toLocaleDateString();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mark Attendance</Text>
      <View style={styles.card}>
        <Text style={styles.infoText}>Date: {currentDate}</Text>
        <Text style={styles.infoText}>Time: {currentTime}</Text>

        {loading ? (
          <ActivityIndicator size="large" color="#00796b" style={{ marginVertical: 20 }} />
        ) : marked ? (
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Image
              source={{ uri: "https://cdn-icons-png.flaticon.com/512/845/845646.png" }}
              style={{ width: 80, height: 80, marginBottom: 10 }}
            />
            <Text style={{ fontSize: 20, color: "green", fontWeight: "bold" }}>Attendance Marked!</Text>
          </View>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleMarkAttendance}>
            <Text style={styles.buttonText}>Mark My Attendance</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={[styles.button, { backgroundColor: "#0097A7", marginTop: 20 }]}>
          <Text style={styles.buttonText}>Scan QR Code (Coming Soon)</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
      <Stack.Screen name="StudentModule" component={StudentModule} />
      <Stack.Screen name="StaffModule" component={StaffModule} />
      <Stack.Screen name="AttendanceMonitoring" component={AttendanceMonitoringScreen} />
      <Stack.Screen name="StudentLeaveOuting" component={StudentLeaveOuting} />
      <Stack.Screen name="StudentProfile" component={StudentProfile} />
      <Stack.Screen name="StudentAttendance" component={StudentAttendance} />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#e0f7fa" },
  title: { fontSize: 26, fontWeight: "bold", color: "#00796b", marginBottom: 20 },
  button: { backgroundColor: "#00796b", padding: 15, borderRadius: 8, margin: 10, width: 220, alignItems: "center" },
  buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },
  backButton: { backgroundColor: "#d32f2f", padding: 15, borderRadius: 8, margin: 10, width: 220, alignItems: "center" },
  card: {
    backgroundColor: "#ffffff",
    padding: 25,
    margin: 10,
    borderRadius: 15,
    alignItems: "center",
    width: 300,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4
  },
  cardText: { fontSize: 18, fontWeight: "bold", color: "#00796b", marginTop: 10 },
  icon: { width: 50, height: 50 },
  input: { borderWidth: 1, borderColor: "#00796b", padding: 10, margin: 10, width: 250, borderRadius: 8 },
  infoText: { fontSize: 16, color: "#00796b", marginVertical: 5 },
  image: { width: 150, height: 150, marginBottom: 20 },
  statText: { fontSize: 16, marginVertical: 5 },
  purple: { color: "purple", fontWeight: "bold" },
  green: { color: "green", fontWeight: "bold" },
  red: { color: "red", fontWeight: "bold" },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: 250
  }
});

export default App;
