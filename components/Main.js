import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { globalStyles } from '../styles/style'

function Main({ onNavigateToContacts }) {
  const newsData = [
    {
      id: 1,
      title: "Новые технологии в мобильной разработке",
      summary: "React Native продолжает развиваться, предлагая новые возможности для создания кроссплатформенных приложений.",
      date: "15 декабря 2024",
      category: "Технологии"
    },
    {
      id: 2,
      title: "Искусственный интеллект в повседневной жизни",
      summary: "ИИ становится все более интегрированным в нашу повседневную жизнь, от умных помощников до автоматизации.",
      date: "14 декабря 2024",
      category: "ИИ"
    },
    {
      id: 3,
      title: "Будущее веб-разработки",
      summary: "Новые фреймворки и инструменты меняют подход к созданию веб-приложений.",
      date: "13 декабря 2024",
      category: "Веб-разработка"
    }
  ];

  return (
    <ScrollView style={globalStyles.main} contentContainerStyle={globalStyles.mainContent}>
      <Text style={globalStyles.title}>Новости</Text>
      <Text style={globalStyles.subtitle}>Актуальные новости из мира технологий</Text>
      
      {newsData.map((news) => (
        <View key={news.id} style={globalStyles.newsCard}>
          <View style={globalStyles.newsHeader}>
            <Text style={globalStyles.newsCategory}>{news.category}</Text>
            <Text style={globalStyles.newsDate}>{news.date}</Text>
          </View>
          <Text style={globalStyles.newsTitle}>{news.title}</Text>
          <Text style={globalStyles.newsSummary}>{news.summary}</Text>
        </View>
      ))}
      
      <TouchableOpacity 
        style={globalStyles.button} 
        onPress={onNavigateToContacts}
      >
        <Text style={globalStyles.buttonText}>Контакты</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Main
