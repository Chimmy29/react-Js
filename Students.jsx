import React, { Component } from 'react';
import { FaUserGraduate } from 'react-icons/fa';

export class Students extends Component {
  render() {
    return (
      <main className="flex-1 bg-gray-100 p-8" style={{ background: '#F1F1F1' }}>
        <div className="flex items-center mb-4">
          <FaUserGraduate className="text-3xl mr-2" style={{ color: 'black' }} />
          <h1 className="text-black text-3xl px-3 py-1 whitespace-nowrap border font-bold">STUDENTS</h1>
        </div>
        <p className="text-black text-2xl  font-semibold mb-2 container mx-auto text-center">This is the main content area of the Students.</p>
      </main>
    );
  }
}

export default Students;
