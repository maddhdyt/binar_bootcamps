const carInventory = [
    {
        id: '6e2bc663-5197-441a-957b-bc75e4a2da7c',
        plate: 'DBH-3491',
        transmission: 'Automatic',
        manufacture: 'Ford',
        model: 'F150',
        available: true,
        type: 'Sedan',
        year: 2022,
        options: [
            'Cruise Control',
            'Tinted Glass',
            'Tinted Glass',
            'Tinted Glass',
            'AM/FM Stereo',
        ],
        specs: [
            'Brake assist',
            'Leather-wrapped shift knob',
            'Glove box lamp',
            'Air conditioning w/in-cabin microfilter',
            'Body color folding remote-controlled pwr mirrors',
            'Dual-stage front airbags w/occupant classification system',
        ],
    },
    {
        id: '9ff03bbc-b18c-4ba7-8f3a-4c4b5c2f6c77',
        plate: 'WXB-3984',
        transmission: 'Automatic',
        manufacture: 'BMW',
        model: 'X5',
        available: false,
        type: 'Convertible',
        year: 2019,
        options: [
            'Keyless Entry',
            'Power Windows',
            'MP3 (Single Disc)',
            'CD (Multi Disc)',
            'Navigation',
        ],
        specs: [
            'Rear passenger map pockets',
            'Electrochromic rearview mirror',
            'Dual chrome exhaust tips',
            'Locking glove box',
            'Pwr front vented disc/rear drum brakes',
        ],
    },
    {
        id: 'bf6b5c43-1377-4ae0-8908-310c64266f81',
        plate: 'OSL-4224',
        transmission: 'Automanual',
        manufacture: 'Lincoln',
        model: 'MKZ',
        available: true,
        type: 'Sedan',
        year: 2021,
        options: [
            'Bucket Seats',
            'Airbag: Passenger',
            'Airbag: Driver',
            'Power Seats',
            'Airbag: Side',
            'Antilock Brakes',
            'CD (Multi Disc)',
        ],
        specs: [
            'Driver & front passenger map pockets',
            'Direct-type tire pressure monitor system',
            'Cargo area lamp',
            'Glove box lamp',
            'Silver finish interior door handles',
            'Driver & front passenger advanced multistage airbags w/occupant sensors',
            'Silver accent IP trim finisher -inc: silver shifter finisher',
            'Fasten seat belt warning light/chime',
        ],
    },
];






// // Fungsi untuk mencari mobil berdasarkan manufacture
// function filterByManufacture(manufacture) {
//     if (manufacture === 'all') {
//         return carInventory;
//     }
//     return carInventory.filter(car => car.manufacture === manufacture);
// }
// // Fungsi untuk mencari mobil berdasarkan transmission
// function filterByTransmission(transmission) {
//     if (transmission === 'all') {
//         return carInventory;
//     }
//     return carInventory.filter(car => car.transmission === transmission);
// }

// // Fungsi untuk mencari mobil berdasarkan tahun
// function filterByYear(year) {
//     if (year === 'All') {
//         return carInventory; // Kembalikan semua data jika "All" dipilih
//     }
//     return carInventory.filter(car => car.year === year);
// }

// // Fungsi untuk mencari mobil berdasarkan availability
// function filterByAvailability(availability) {
//     if (availability === 'All') {
//         return carInventory;
//     }
//     return carInventory.filter(car => car.available === (availability === 'available'));
// }

// // Fungsi untuk menampilkan data ke dalam tabel HTML
// function displayFilteredData(filteredData) {
//     const tableBody = document.getElementById('table-body-list-cars');
//     tableBody.innerHTML = '';
//     // Loop melalui data yang sudah difilter dan tambahkan ke dalam tabel
//     filteredData.forEach(car => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//         <td>${car.plate}</td>
//         <td>${car.manufacture}</td>
//         <td>${car.model}</td>
//         <td>${car.type}</td>
//         <td>${car.transmission}</td>
//         <td>${car.year}</td>
//         <td>${car.available ? 'Available' : 'Rented'}</td>
//       `;
//         tableBody.appendChild(row);
//     });
// }

// // Event listener untuk search form
// const searchForm = document.getElementById('form-search-car-manufacture');
// searchForm.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const manufactureInput = document.querySelector('input[name="manufacture"]').value;
//     const filteredData = filterByManufacture(manufactureInput);
//     displayFilteredData(filteredData);
// });

// // Event listener for filter by availability
// const filterAvailabilitySelect = document.getElementById('filterAvailability');
// filterAvailabilitySelect.addEventListener('change', function () {
//     const selectedAvailability = filterAvailabilitySelect.value;

//     if (selectedAvailability === 'all') {
//         displayFilteredData(carInventory);
//     } else {
//         const filteredData = filterByAvailability(selectedAvailability);
//         displayFilteredData(filteredData);
//     }
// });

// // Event listener for filter by manufacture
// const filterManufactureSelect = document.getElementById('filterManufacture');
// filterManufactureSelect.addEventListener('change', function () {
//     const selectedManufacture = filterManufactureSelect.value;

//     if (selectedManufacture === 'all') {
//         displayFilteredData(carInventory);
//     } else {
//         const filteredData = filterByManufacture(selectedManufacture);
//         displayFilteredData(filteredData);
//     }
// });


// // Event listener for filter by transmission
// const filterTransmissionSelect = document.getElementById('filterTransmission');
// filterTransmissionSelect.addEventListener('change', function () {
//     const selectedTransmission = filterTransmissionSelect.value;
//     if (selectedTransmission === 'all') {
//         displayFilteredData(carInventory);
//     } else {
//         const filteredData = filterByTransmission(selectedTransmission);
//         displayFilteredData(filteredData);
//     }
// });


// // Event listener for filter by year
// const filterYearSelect = document.getElementById('filterYear');
// filterYearSelect.addEventListener('change', function () {
//     const selectedYear = filterYearSelect.value;
//     if (selectedYear === 'Open this select menu' || selectedYear === 'All') {
//         displayFilteredData(carInventory);
//     } else {
//         const filteredData = filterByYear(parseInt(selectedYear));
//         displayFilteredData(filteredData);
//     }
// });


// // Initialize
// displayFilteredData(carInventory);