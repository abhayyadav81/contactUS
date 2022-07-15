import { View, Text, Image, StyleSheet, TextInput, Button, TouchableOpacity, ScrollView, Linking } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FlatList } from 'react-native-web';


const DetailScreen = ({ navigation }) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [emailValidate, setEmailValidate] = useState(true);
    const [phoneNumberValidate, setPhoneNumberValidate] = useState(true)
    const [textInputValue, setTextInputValue] = useState(true)
    const onChnageEmailValidate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            console.log("Email is Not Correct");
            setEmail(text)
            setEmailValidate(false)
            return false;
        }
        else {
            setEmail(text)
            setEmailValidate(true)
            console.log("Email is Correct");
        }
    }
    const mobilevalidate = (text) => {
        const reg = /^[0]?[789]\d{9}$/;
        if (reg.test(text) === false) {
            setNumber(text)
            setPhoneNumberValidate(false)
            return false;
        } else {
            setNumber(text)
            setPhoneNumberValidate(true);
            return true;
        }
    }
    const onEnterText = (TextInputValue) => {
        if (TextInputValue.trim() != 0) {
            setName(TextInputValue)
            setTextInputValue(true)
        } else {
            setName(TextInputValue)
            setTextInputValue(false)
        }
    }
    const validate = () => {
        console.log("hiii",email.length >0 && emailValidate)
        console.log("hlo", name.length > 0 && textInputValue)
        console.log("ababa", number.length > 0 && phoneNumberValidate)
        // console.log(emailValidate)
        if ((email.length >0 && emailValidate) && (name.length > 0 && textInputValue) && (number.length > 0 && phoneNumberValidate)) {
            Linking.openURL(`mailto:info@redpositive.in?subject=SendMail&body=Name:  ${name} <br> Number:  ${number}<br> Email:  ${email} <br>  Message:  ${message}`)
        } else {
            alert('please check the detail')
        }


    }
    return (
        <ScrollView>
            <View style={{ padding: 20, marginTop: 30 }}>

                <AntDesign name="banckward" size={24} color="black" />
                <Text style={{ fontSize: 30, marginTop: 50, fontWeight: 'bold' }}>Hey,</Text>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Fill the Details.</Text>
                <View style={{ marginTop: 20, }}>
                    <Text style={styles.text}>Enter Name :</Text>
                    <TextInput style={styles.TextInput} placeholder=' your full name' onChangeText={onEnterText} />
                    {!textInputValue ? <Text style={{ color: '#8B0000', fontSize: 20 }}>full name is required </Text> : null}
                </View>
                <View style={{}}>
                    <Text style={styles.text}>Enter Mobile Number :</Text>

                    <TextInput style={styles.TextInput} placeholder=' mobile number' keyboardType='numeric' onChangeText={mobilevalidate} maxLength={10} />
                    {!phoneNumberValidate ? <Text style={{ color: '#8B0000', fontSize: 20 }}>phone number is not valid</Text> : null}

                </View>
                <View style={{ marginTop: 20, }}>
                    <Text style={styles.text}>Enter Email :</Text>

                    <TextInput style={styles.TextInput} placeholder=' email' onChangeText={onChnageEmailValidate} />
                    {!emailValidate ? <Text style={{ color: '#8B0000', fontSize: 20 }}>email is not valid</Text> : null}

                </View>

                <View style={{marginTop:20}}>
                    <Text style={styles.text}> Message :</Text>
                    <View style={styles.messageBox}>
                        <TextInput style={{ fontSize: 20 }} onChangeText={setMessage} multiline={true} />
                    </View>
                </View>
                <TouchableOpacity style={styles.submitButton} onPress={() => validate()}>
                    <Text style={{ fontSize: 25, color: 'white' }}>SendMail</Text>
                </TouchableOpacity>


            </View>
        </ScrollView >
    )
}
const styles = StyleSheet.create({
    TextInput: {
        // backgroundColor: '#FFDEAD',
        alignItems: 'center', height: 50,
        borderRadius: 2,
        fontSize: 20,
        color: '#191970',
        borderWidth: 1,
        borderRadius: 10,
        padding: 8

    },
    submitButton: {
        backgroundColor: '#800000',
        alignItems: 'center',
        marginTop: 20,
        height: 50,
        justifyContent: 'center',
        borderRadius: 10
    },
    text: {
        fontSize: 20,
        color: '#556B2F'
    },
    messageBox: {
        marginTop: 10,
        height: 100,
        borderRadius: 1,
        borderWidth: 1
        , padding: 8
    },


})
export default DetailScreen