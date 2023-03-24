import React, {useState} from 'react';
import { Text, TextInput, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function BuyCourse() {
  const {currentBook, setCurrentBook} = useState('eq')

  return (
    <View style={styles.container}>
      <View style={styles.inputSection}>            
        <View style={styles.inputContainerStyle}>
          <Text style={styles.labelStyle}>Name</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="John Doe"
          />          
        </View>        
      </View>      
      <View style={styles.inputSection}>
        <View style={styles.inputContainerStyle}>
          <Text style={styles.labelStyle}>Card no.</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="XXXX-XXXX-XXXX-XXXX"
          />          
        </View>        
      </View>

      <View style={styles.inputSection}>
        <View style={styles.inputContainerStyle}>
          <Text style={styles.labelStyle}>Expire date</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="MM/YY"
          />          
        </View>        
      </View>     

      <View style={styles.inputSection}>      
        <View style={styles.inputContainerStyle}>                      
          <Text style={styles.labelStyle}>Pick a book</Text>          
          <Picker
            selectedValue={currentBook} 
            onValueChange={(e) => {
              setCurrentBook(e.target.value)
            }} 
            style={styles.pickerStyle}
          >
            <Picker.Item label="Eloquent JavaScript" value="eq" />
            <Picker.Item label="You Don't Know JS" value="ydkjs" />
            <Picker.Item label="JavaScript: The Good Parts" value="jtgp" />
            <Picker.Item label="Effective JavaScript" value="ejs" />
            <Picker.Item label="JavaScript Patterns" value="jp" />
            <Picker.Item label="Node.js in Action" value="nia" />
            <Picker.Item label="Learn JavaScript quickly" value="ljq" />
          </Picker>                          
        </View>
      </View>

      <Button style={styles.buttonStyle}
        title="Buy this book"
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  inputSection: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  inputStyle: {
    color: 'grey',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 15,
    lineHeight: 23,
    flex: 2
  },
  pickerStyle: {
    height: 20,
    width: 250,
    alignItems: 'flex-start'
  },
  labelStyle: {
    fontSize: 18,    
    fontWeight: 'bold',
    paddingLeft: 20,
    flex: 1
  },
  inputContainerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
