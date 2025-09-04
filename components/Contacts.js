import { View, Text, TouchableOpacity, ScrollView, Linking } from 'react-native'
import { globalStyles } from '../styles/style'

function Contacts({ onBack }) {
  const contactInfo = [
    {
      id: 1,
      type: "Телефон",
      value: "+38 (000) 000-00-00",
      action: () => Linking.openURL('tel:+38000000000')
    },
    {
      id: 2,
      type: "Email",
      value: "info@newsapp.com",
      action: () => Linking.openURL('mailto:info@newsapp.com')
    },
    {
      id: 3,
      type: "Веб-сайт",
      value: "www.newsapp.com",
      action: () => Linking.openURL('https://www.newsapp.com')
    },
    {
      id: 4,
      type: "Адрес",
      value: "Москва, ул. Технологическая, 15",
      action: () => Linking.openURL('https://maps.google.com/?q=Odessa, ул. Технологическая, 15')
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Анна Иванова",
      position: "Главный редактор",
      email: "anna@newsapp.com"
    },
    {
      id: 2,
      name: "Михаил Петров",
      position: "Технический директор",
      email: "mikhail@newsapp.com"
    },
    {
      id: 3,
      name: "Елена Сидорова",
      position: "Корреспондент",
      email: "elena@newsapp.com"
    }
  ];

  return (
    <ScrollView style={globalStyles.main} contentContainerStyle={globalStyles.mainContent}>
      <Text style={globalStyles.title}>Контакты</Text>
      <Text style={globalStyles.subtitle}>Свяжитесь с нами</Text>
      
      <View style={globalStyles.section}>
        <Text style={globalStyles.sectionTitle}>Контактная информация</Text>
        {contactInfo.map((contact) => (
          <TouchableOpacity 
            key={contact.id} 
            style={globalStyles.contactItem}
            onPress={contact.action}
          >
            <Text style={globalStyles.contactType}>{contact.type}</Text>
            <Text style={globalStyles.contactValue}>{contact.value}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={globalStyles.section}>
        <Text style={globalStyles.sectionTitle}>Наша команда</Text>
        {teamMembers.map((member) => (
          <View key={member.id} style={globalStyles.teamMember}>
            <Text style={globalStyles.memberName}>{member.name}</Text>
            <Text style={globalStyles.memberPosition}>{member.position}</Text>
            <Text style={globalStyles.memberEmail}>{member.email}</Text>
          </View>
        ))}
      </View>

      <View style={globalStyles.section}>
        <Text style={globalStyles.sectionTitle}>О приложении</Text>
        <Text style={globalStyles.appDescription}>
          NewsApp - это современное приложение для чтения новостей, созданное с использованием React Native. 
          Мы предоставляем актуальные новости из мира технологий, науки и инноваций.
        </Text>
        <Text style={globalStyles.appDescription}>
          Версия приложения: 1.0.0{'\n'}
          Последнее обновление: 15 декабря 2024
        </Text>
      </View>
      
      <TouchableOpacity 
        style={globalStyles.backButton} 
        onPress={onBack}
      >
        <Text style={globalStyles.buttonText}>Назад к новостям</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Contacts
