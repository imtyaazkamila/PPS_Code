// src/App.js
import React from 'react';
import './App.css';
import Navbar from "./Navbar";

function App() {
  const menuData = [
    { id: 1, nama: 'Burger Keju', deskripsi: 'Burger dengan daging sapi, keju, dan sayuran segar', harga: '35.000' },
    { id: 2, nama: 'Kentang Goreng', deskripsi: 'Kentang goreng renyah yang disajikan dengan saus sambal', harga: '15.000' },
    { id: 3, nama: 'Ayam Goreng Crispy', deskripsi: 'Ayam goreng crispy dengan bumbu rahasia', harga: '40.000' },
    { id: 6, nama: 'Cheeseburger', deskripsi: 'Burger dengan daging sapi, keju cheddar, dan saus spesial', harga: '45.000' },
    { id: 7, nama: 'Hot Dog', deskripsi: 'Sosis dalam roti dengan saus mustard dan ketchup', harga: '25.000' },
    { id: 8, nama: 'Chicken Nuggets', deskripsi: 'Nugget ayam crispy disajikan dengan saus BBQ', harga: '30.000' },
    { id: 9, nama: 'French Fries', deskripsi: 'Kentang goreng renyah, cocok untuk teman makan', harga: '15.000' },
    { id: 10, nama: 'Milkshake Coklat', deskripsi: 'Minuman milkshake coklat yang creamy dan manis', harga: '20.000' },
    { id: 11, nama: 'Pizza Margherita', deskripsi: 'Pizza dengan saus tomat, keju mozzarella, dan basil segar', harga: '80.000' },
    { id: 12, nama: 'Iced Tea', deskripsi: 'Teh dingin manis yang menyegarkan', harga: '8.000' },
  ];

  return (
    <div className="App">
      <Navbar />
      <main>
        <h1>FastBite</h1>
        <div className="columns mt-5 is-centered">
          <div className="columns is-half">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <button className="button is-small is-success">Tambah</button>
              <h2 style={{ marginLeft: '10px' }}>Menu</h2>
            </div>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nama</th>
                  <th>Deskripsi</th>
                  <th>Harga</th>
                </tr>
              </thead>
              <tbody>
                {menuData.map((menu, index) => (
                  <tr key={menu.id}>
                    <td>{index + 1}</td>
                    <td>{menu.nama}</td>
                    <td>{menu.deskripsi}</td>
                    <td>{menu.harga}</td>
                    <td>
                      <button className="button is-small is-info">Update</button>
                      <button className="button is-small is-danger">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;