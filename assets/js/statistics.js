// habitat distribution chart (pie chart)
var ctxHabitat = document.getElementById('habitatChart').getContext('2d');
var habitatChart = new Chart(ctxHabitat, {
    type: 'pie',
    data: {
        labels: ['China', 'Nepal', 'Bhutan', 'India', 'Myanmar'],
        datasets: [{
            label: 'Habitat Distribution',
            data: [40, 30, 15, 10, 5],
            backgroundColor: ['#60A5FA', '#3B82F6', '#9333EA', '#F59E0B', '#EC4899'],
            borderColor: ['#2563EB', '#2563EB', '#6B21A8', '#F59E0B', '#BE185D'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        }
    }
});

// diet composition chart (doughnut chart)
var ctxDiet = document.getElementById('dietChart').getContext('2d');
var dietChart = new Chart(ctxDiet, {
    type: 'doughnut',
    data: {
        labels: ['Bamboo', 'Fruits', 'Insects', 'Eggs'],
        datasets: [{
            label: 'Diet Composition',
            data: [60, 20, 10, 10],
            backgroundColor: ['#F87171', '#34D399', '#60A5FA', '#F59E0B'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        }
    }
});

// weight range chart (radar chart)
var ctxWeight = document.getElementById('weightChart').getContext('2d');
var weightChart = new Chart(ctxWeight, {
    type: 'radar',
    data: {
        labels: ['Small', 'Medium', 'Large'],
        datasets: [{
            label: 'Red Panda Weight Range',
            data: [3, 5, 7],
            backgroundColor: 'rgba(59, 130, 246, 0.6)',
            borderColor: 'rgba(59, 130, 246, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            r: {
                beginAtZero: true
            }
        }
    }
});

// lifespan chart (line chart)
var ctxLifespan = document.getElementById('lifespanChart').getContext('2d');
var lifespanChart = new Chart(ctxLifespan, {
    type: 'line',
    data: {
        labels: ['2010', '2012', '2014', '2016', '2018', '2020', '2022'],
        datasets: [{
            label: 'Average Lifespan (Years)',
            data: [10, 12, 12, 14, 15, 15, 14],
            fill: false,
            borderColor: '#60A5FA',
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        }
    }
});