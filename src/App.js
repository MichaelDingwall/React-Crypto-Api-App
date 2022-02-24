import NewsFeed from './components/NewsFeed'
import CurrencyConverter from './components/CurrencyConverter'
import Header from './components/Header'

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <Header />
      </div>
       
       
       <div className="content">  
       <div className="C"><CurrencyConverter /></div>
        <div className="N"><NewsFeed /></div>
        
        </div>
     
        

    </div>
  )
}

export default App
