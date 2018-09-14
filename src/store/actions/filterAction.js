const filterAction={

    SHOW_COMPLETED:'SHOW_COMPLETED',
    showCompleted:function ({ 
      items }) {
      return {
        type: filterAction.SHOW_COMPLETED,
        items:items
      }
    }
  }
  module.exports=filterAction