import React, { Component } from 'react'
import Hero from './pages/Hero'
import Header from './components/Header'
export class App extends Component {
  render() {
    return (
      <>

        <div >
          {/* Floating Header */}
          <Header />

          {/* Hero Section */}
          <Hero />
        </div>
      </>
    )
  }
}

export default App