import React from "react";
import { ActivityIndicator, StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import axios from "axios";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//--
//----
//--
import CategoryListItem from "../components/CategoryListItem";
import Screen2 from "./Screen2";

export default class Screen1 extends React.Component {
    static NaviOption = {
        title: 'Homes'
    };
  
    
  
    constructor(props) {
      super(props);
      this.state = {
        categories: [
          // { id: 1, name: 'Dụng cụ trượt tuyết'},
          // { id: 2, name: 'Quần áo trượt tuyết'},
          // { id: 3, name: 'Kính mũ trượt tuyết'}
          
        ],
        isLoading: true
      };
    }
  
    async getMovies() {
      try {
        const response = await fetch('https://reactnative.dev/movies.json');
        const json = await response.json();
        this.setState({ categories: json.movies });
      } catch (error) {
        console.log(error)
      } finally {
        this.setState({ isLoading: false })
      }
    }

    componentDidMount() {
      this.getMovies()
    }

    render() {
      const {navigation} = this.props;
      const { categories, isLoading } = this.state;
      return (
        <View>
          {/* <ScrollView>     */}
          {isLoading ? <ActivityIndicator/> : (
         
          <FlatList 
            data={categories}
            renderItem = {({item}) => 
              <CategoryListItem 
                category={item}
                onPress={() => navigation.navigate('Screen2', {
                  title: item.title,
                  name: item.releaseYear
                })}
                >
  
              </CategoryListItem>
            }
            keyExtractor={item => `${item.id}`} 
            contentContainerStyle={{ paddingRight: 8, paddingLeft: 8, paddingTop: 8 }}>
            
          </FlatList>
          
          )}
          {/* </ScrollView> */}
        </View>
        
      );
    }
  
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'center',
      paddingLeft: 8,
      paddingRight: 8
    },
  });