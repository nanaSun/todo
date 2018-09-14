const {FILTERACTION}=require("../types")
const {SHOW_COMPLETED}=FILTERACTION
const filterAction={
    showCompleted:function ({ 
      items }) {
      return {
        type: SHOW_COMPLETED,
        items:items
      }
    }
  }
  module.exports=filterAction