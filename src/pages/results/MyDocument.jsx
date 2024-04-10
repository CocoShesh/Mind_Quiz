import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { PDFDownloadLink } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    marginBottom: 10,
  },
  questionItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#ffffff",
    border: "1px solid #cccccc",
  },
  answerSection: {
    marginTop: 5,
    marginBottom: 5,
  },
  correct: {
    color: "green",
  },
  incorrect: {
    color: "red",
  },
});

// Create Document Component
const MyDocument = ({ questions, answerPerQuestions, uniqueFinalAnswers }) => (
  <PDFDownloadLink
    document={
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            <Text>History:</Text>
          </View>
          {questions?.map((question, index) => {
            const userAnswer = answerPerQuestions[index]?.answer;
            const correctAnswer = uniqueFinalAnswers[index];
            const isCorrect = userAnswer === correctAnswer;

            return (
              <View key={index} style={styles.questionItem}>
                <Text>Question: {question.question}</Text>
                <View style={styles.answerSection}>
                  <Text>Your Answer: {userAnswer}</Text>
                  <Text>Correct Answer: {correctAnswer}</Text>
                </View>
                {isCorrect ? (
                  <Text style={styles.correct}>Correct!</Text>
                ) : (
                  <Text style={styles.incorrect}>Incorrect</Text>
                )}
              </View>
            );
          })}
        </Page>
      </Document>
    }
    fileName="quiz_results.pdf"
  >
    {({ blob, url, loading, error }) =>
      loading ? "Loading document..." : "Download PDF"
    }
  </PDFDownloadLink>
);

export default MyDocument;
