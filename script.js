// script.js

// Función para comprobar la contraseña en la página de login
function checkPassword() {
    const pwd = document.getElementById('passwordInput').value;
    if (pwd === CONFIG.PASSWORD) {
        // Redirigir al dashboard
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('loginError').textContent = 'Contraseña incorrecta';
    }
}

// Función para cerrar sesión (desde dashboard)
function logout() {
    window.location.href = 'index.html';
}

// Función para calcular la gestión de riesgo (se ejecuta al cambiar los inputs)
function calculateRisk() {
    const capital = parseFloat(document.getElementById('totalCapital').value) || 550;
    const riskPercent = parseFloat(document.getElementById('riskPercent').value) || 2;
    const leverage = parseFloat(document.getElementById('leverage').value) || 100;
    const lotSize = parseFloat(document.getElementById('lotSize').value) || 0.1;

    const riskUsd = (capital * riskPercent / 100).toFixed(2);
    document.getElementById('riskUsd').innerText = riskUsd;

    // Ejemplo: para XAUUSD, asumimos que 1 lote = 100 oz, y un stop de 50 pips
    const recommendedLot = (riskUsd / 50).toFixed(2);
    document.getElementById('recommendedLot').innerText = recommendedLot;

    // Cálculo de ganancias para apalancamiento (simplificado)
    // Asumimos que TP1 está a 20 pips y TP2 a 40 pips, y cada pip en 1 lote = 10 USD
    const profitTp1 = (lotSize * 10 * 20).toFixed(2);
    const profitTp2 = (lotSize * 10 * 40).toFixed(2);
    const maxLoss = (lotSize * 10 * 30).toFixed(2); // stop de 30 pips

    document.getElementById('profitTp1').innerText = profitTp1;
    document.getElementById('profitTp2').innerText = profitTp2;
    document.getElementById('maxLoss').innerText = maxLoss;

    // Cálculo para binarias (payout 80%)
    const binaryInv = parseFloat(document.getElementById('binaryInvestment').value) || 10;
    const binaryProfit = (binaryInv * 0.8).toFixed(2);
    document.getElementById('binaryProfit').innerText = binaryProfit;
}

// Función para exportar historial a CSV (simulada por ahora)
function exportHistory() {
    alert('Función de exportación a CSV se conectará con el backend más adelante.');
}

// Función para ejecutar backtesting (simulada)
function runBacktest() {
    const strategy = document.getElementById('backtestStrategy').value;
    const asset = document.getElementById('backtestAsset').value;
    const days = document.getElementById('backtestDays').value;

    document.getElementById('backtestResults').innerHTML = `
        <h4>Resultados del Backtest (simulados)</h4>
        <p>Estrategia: ${strategy}</p>
        <p>Activo: ${asset}</p>
        <p>Días: ${days}</p>
        <p>Total operaciones: 45</p>
        <p>Ganadoras: 31 (68.9%)</p>
        <p>Perdedoras: 14</p>
        <p>Ganancia neta: $1250</p>
    `;
}

// Inicializar eventos cuando la página carga
window.onload = function() {
    // Si estamos en dashboard.html, configurar los listeners
    if (window.location.pathname.includes('dashboard.html')) {
        document.getElementById('totalCapital').addEventListener('input', calculateRisk);
        document.getElementById('riskPercent').addEventListener('input', calculateRisk);
        document.getElementById('leverage').addEventListener('input', calculateRisk);
        document.getElementById('lotSize').addEventListener('input', calculateRisk);
        document.getElementById('binaryInvestment').addEventListener('input', calculateRisk);
        calculateRisk(); // Llamada inicial
    }
};