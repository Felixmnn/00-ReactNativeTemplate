import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { router } from 'expo-router';


const ModalExample = ({showModal}) => {

    const [modalVisible, setModalVisible] = useState(showModal);
  
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
                              <TouchableOpacity
                                className="bg-blue-500 px-4 py-2 rounded"
                                onPress={() => setModalVisible(true)}
                              >
                                <Text className="text-white font-bold">Open Popup</Text>
                              </TouchableOpacity>
    
                              <Modal
                                transparent={true}
                                animationType="slide"
                                visible={modalVisible}
                                onRequestClose={() => setModalVisible(false)}
                              >
                                <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
                                  <View className="bg-white w-72 p-5 rounded-lg">
                                    <Text className="text-lg font-bold mb-4">Create a Project</Text>
                                    <TouchableOpacity
                                      className="bg-blue-500 p-3 rounded mb-2"
                                      onPress={() => {
                                        console.log("Option 1 Selected");
                                        setModalVisible(false);
                                        router.push("/home")

                                      }}
                                    >
                                      <Text className="text-center text-base">Get Started</Text>
                                    </TouchableOpacity>
                                    
                                  </View>
                                </View>
                              </Modal>
                            </View>
  )
}

export default ModalExample