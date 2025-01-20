import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const FilterList = ({filters, selectedFilters, setSelectedFilters}) => {

    function changeFilters( newFilter){
        console.log("The Filters",newFilter)
        console.log("All Filters", selectedFilters)
        if (selectedFilters == null){
            setSelectedFilters([newFilter])
        } else if (Array.isArray(selectedFilters) && selectedFilters.includes(newFilter)){
            const newArray = selectedFilters.filter((filter)=> filter !== newFilter)
            setSelectedFilters(newArray)
        } else {
                setSelectedFilters([...selectedFilters, newFilter]);
            }
        }



  return (
    <View>
      {
        filters.map((filter)=> {
            return <TouchableOpacity
            className={`p-2 ${Array.isArray(selectedFilters) && selectedFilters.includes(filter)? "bg-red-500": "bg-gray-300"}`}
            onPress={()=> changeFilters(filter)}
            >
                <Text>{filter}</Text>
            </TouchableOpacity>
        })
      }
    </View>
  )
}

export default FilterList