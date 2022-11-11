import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, Input, Button } from "@rneui/themed";

const PessoaAddComponent = () => {
    return (
        <>
            <Card containerStyle={styles.card}>
                <Card.Title>Cadastro de pessoa</Card.Title>
                <Card.Divider></Card.Divider>
                <Input
                    placeholder='Nome'
                    leftIcon={{type: 'font-awesome', name: 'user'}}
                    style={styles.textInput}
                />
                <Input 
                    placeholder='Idade'
                    leftIcon={{type: 'font-awessome', name: 'info'}}
                />
                <Input 
                    placeholder='Hobby'
                    leftIcon={{type: 'font-awesome', name: 'heart'}}
                    style={styles.textInput}
                />
                <Button  
                    tittle='OK'
                    type='outline'  
                    buttonStyle={styles.button}
                    />
            </Card>
        </>
    )
}

export default PessoaAddComponent

const styles = StyleSheet.create({

})
