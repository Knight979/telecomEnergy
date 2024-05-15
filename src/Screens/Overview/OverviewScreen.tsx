/*
 * @Description: file content
 * @Author: Knight
 * @version: 2.0.0
 * @Date: 2024-04-23 14:49:11
 * @LastEditors: Knight
 * @LastEditTime: 2024-05-15 10:46:04
 */
import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, SafeAreaView } from 'react-native';


//icons
import SiteIcon from '@/Assets/Icons/Overview/laptop.svg'
import CCTVIcon from '@/Assets/Icons/Overview/cctv.svg'
import AlarmIcon from '@/Assets/Icons/Overview/caution.svg'
import TicketIcon from '@/Assets/Icons/Overview/ticket.svg'
import LogIcon from '@/Assets/Icons/Overview/log-file.svg'
import ReportIcon from '@/Assets/Icons/Overview/report.svg'
import DeviceIcon from '@/Assets/Icons/Overview/device.svg'
const OverviewScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>OverviewScreen</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default OverviewScreen;
