

const { createApp } = Vue

createApp({

  data() {

    return {
        
        newTodo: '',
       
        
      todos: [

        { 
            'text': '',
            'done': false
        }
       
            

        ],

        
    }
},

  
methods: {
    addTodo() {
        this.todos.push({
            text: this.newTodo,
            done: false,
            
        })

        this.newTodo = ''
      
    },

    removeTodo(index) {
        this.todos.splice(index, 1)
    },

   
}





}).mount('#app')
