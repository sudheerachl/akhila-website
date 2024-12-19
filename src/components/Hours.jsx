import React from "react";
import { FcCancel, FcOk } from "react-icons/fc";

const Hours = () => {
  const Days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      padding: "20px",
      backgroundColor: "white",
    },
    heading: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "black",
      textAlign: "center",
      marginBottom: "20px",
    },
    daysContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
      gap: "20px",
      width: "100%",
      maxWidth: "800px",
    },
    dayItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100px",
      height: "100px",
      margin: "0 auto",
      backgroundColor: "#0e21fe",
      borderRadius: "50%",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    dayText: {
      fontSize: "1rem",
      fontWeight: "bold",
      color: "rgb(255, 255, 255)",
      textAlign: "center",
    },
    statusIcon: {
      fontSize: "1.5rem",
      color: "rgb(255, 255, 255)",
      marginTop: "5px",
    },
    consultationsContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      maxWidth: "800px",
      marginTop: "30px",
    },
    consultationsItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      maxWidth: "500px",
      padding: "20px",
      marginBottom: "20px",
      backgroundColor: "#0e21fe",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    consultationsText: {
      fontSize: "1rem",
      fontWeight: "bold",
      color: "rgb(255, 255, 255)",
      textAlign: "center",
      margin: "5px 0",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Clinic Hours</h1>
      <div style={styles.daysContainer}>
        {Days.map((day) => (
          <div style={styles.dayItem} key={day}>
            <h2 style={styles.dayText}>{day}</h2>
            {["Tuesday", "Thursday", "Friday", "Sunday"].includes(day) ? (
              <FcCancel style={styles.statusIcon} />
            ) : (
              <FcOk style={styles.statusIcon} />
            )}
          </div>
        ))}
      </div>
      <div style={styles.consultationsContainer}>
        <div style={styles.consultationsItem}>
          <h2 style={styles.consultationsText}>Online Video Consultations</h2>
          <h3 style={styles.consultationsText}>10 am to 12 pm</h3>
          <h4 style={styles.consultationsText}>Indian Standard Time</h4>
        </div>
        <div style={styles.consultationsItem}>
          <h2 style={styles.consultationsText}>WhatsApp Consultations</h2>
          <h3 style={styles.consultationsText}>Reply within 24 hours</h3>
        </div>
      </div>
    </div>
  );
};

export default Hours;
