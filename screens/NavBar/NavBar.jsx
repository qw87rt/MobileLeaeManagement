import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";
import { styles } from "./NavBarstyle";

const NavBar = () => {
  return (
    <View style={styles.navBar}>
     
      <TouchableOpacity>
        <Link to="/history" href="/notification" style={styles.link}>
          <Text style={styles.linkText}>History</Text>
        </Link>
      </TouchableOpacity>
      <TouchableOpacity>
        <Link to="/leave-request" href="/notification" style={styles.link}>
          <Text style={styles.linkText}>Leave Request</Text>
        </Link>
      </TouchableOpacity>
      <TouchableOpacity>
        <Link to="/notification" href="/notification" style={styles.link}>
          <Text style={styles.linkText}>Notification</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
