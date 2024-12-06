// src/app/page.js
"use client"
import Navbar from "@/components/Navbar";
import ChatBot from "@/components/chatbot";
import styles from "@/app/page.module.css";
import React from "react";
export default function Page() {
  const connectToDatabase = async () => {
    try {
      // Fetch from the API route to connect to MongoDB
      const response = await fetch('/api/connectdb', {
        method: 'GET',  // Ensure GET request is used
        headers: {
          'Content-Type': 'application/json',  // Ensure content type is specified
        },
      });

      // If the response is not ok, throw an error
      if (!response.ok) {
        throw new Error(`Failed to connect: ${response.statusText}`);
      }

      // Log the successful connection message
      const data = await response.text();
      console.log("MongoDB connection response:", data);

    } catch (error) {
      // Log any errors that occur during the fetch call
      console.error("Error connecting to MongoDB:", error);
    }
  };

  // Automatically call the connectToDatabase function on page load
  React.useEffect(() => {
    connectToDatabase();
  }, []);  // Empty dependency array to run only once when the page loads

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <div className={styles.chatSection}>
        <ChatBot />
      </div>
    </div>
  );
}
