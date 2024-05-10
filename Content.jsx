import React, { Component } from 'react';
import { FaUserCog, FaChartBar, FaUserGraduate } from 'react-icons/fa';

export class Content extends Component {
  render() {
    return (
      <main className="flex-1 bg-gray-100 p-8">
        <div className="container mx-auto text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <FaUserGraduate className="text-3xl mr-2" style={{ color: 'black' }} />          <div>
            <h2 className="text-3xl font-bold text-black-800 mb-4"><ADMIN></ADMIN></h2>
            <p className="text-lg text-white-700">This is the main content area of the application.</p>
          </div>
        </div>
      </main>
    );
  }
}

export default Content;
