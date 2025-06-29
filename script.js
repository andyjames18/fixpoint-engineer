body {
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  background-color: #f9f9f9;
  color: #222;
}

header {
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  height: 40px;
  margin-right: 15px;
}

header h1 {
  font-size: 1.5rem;
  margin: 0;
}

.dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
}

.card {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

.metric {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 10px;
}
