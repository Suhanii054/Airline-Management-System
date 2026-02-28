const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Running post-install setup...\n');

// Check if Python is installed
function checkPython() {
  try {
    const pythonVersion = execSync('python --version', { encoding: 'utf-8' });
    console.log('✅ Python found:', pythonVersion.trim());
    return true;
  } catch (error) {
    try {
      const python3Version = execSync('python3 --version', { encoding: 'utf-8' });
      console.log('✅ Python3 found:', python3Version.trim());
      return true;
    } catch (error3) {
      console.log('⚠️  Python not found. ML services will need manual setup.');
      console.log('   Install Python from: https://www.python.org/\n');
      return false;
    }
  }
}

// Setup Python environment
function setupPython() {
  if (!checkPython()) return;

  const mlServicesPath = path.join(__dirname, '..', 'ml-services');
  
  if (!fs.existsSync(mlServicesPath)) {
    console.log('⚠️  ml-services folder not found. Skipping Python setup.\n');
    return;
  }

  console.log('🐍 Setting up Python virtual environment...');
  
  try {
    const isWindows = process.platform === 'win32';
    const pythonCmd = isWindows ? 'python' : 'python3';
    
    // Create virtual environment
    if (!fs.existsSync(path.join(mlServicesPath, 'venv'))) {
      execSync(`${pythonCmd} -m venv venv`, { 
        cwd: mlServicesPath, 
        stdio: 'inherit' 
      });
      console.log('✅ Virtual environment created');
    }

    // Install Python packages
    const pipCmd = isWindows 
      ? '.\\venv\\Scripts\\pip' 
      : './venv/bin/pip';
    
    console.log('📦 Installing Python dependencies...');
    execSync(`${pipCmd} install --upgrade pip`, { 
      cwd: mlServicesPath, 
      stdio: 'inherit' 
    });
    
    execSync(`${pipCmd} install fastapi uvicorn pandas numpy scikit-learn`, { 
      cwd: mlServicesPath, 
      stdio: 'inherit' 
    });
    
    console.log('✅ Python dependencies installed\n');
  } catch (error) {
    console.log('⚠️  Python setup failed. You may need to set it up manually.\n');
  }
}

// Copy environment files
function setupEnvFiles() {
  console.log('📝 Checking environment files...');
  
  const envExamples = [
    { from: 'frontend/.env.example', to: 'frontend/.env.local' },
    { from: 'backend/services/user-service/.env.example', to: 'backend/services/user-service/.env' },
    { from: 'backend/services/flight-service/.env.example', to: 'backend/services/flight-service/.env' },
    { from: 'backend/services/booking-service/.env.example', to: 'backend/services/booking-service/.env' },
    { from: 'backend/services/payment-service/.env.example', to: 'backend/services/payment-service/.env' },
    { from: 'backend/services/pricing-service/.env.example', to: 'backend/services/pricing-service/.env' },
    { from: 'backend/services/recommendation-service/.env.example', to: 'backend/services/recommendation-service/.env' },
    { from: 'backend/services/notification-service/.env.example', to: 'backend/services/notification-service/.env' },
    { from: 'backend/services/admin-service/.env.example', to: 'backend/services/admin-service/.env' },
  ];

  envExamples.forEach(({ from, to }) => {
    const fromPath = path.join(__dirname, '..', from);
    const toPath = path.join(__dirname, '..', to);
    
    if (fs.existsSync(fromPath) && !fs.existsSync(toPath)) {
      fs.copyFileSync(fromPath, toPath);
      console.log(`✅ Created ${to}`);
    }
  });
  
  console.log('');
}

// Main setup
function main() {
  console.log('╔═══════════════════════════════════════════════════╗');
  console.log('║   Airline Management System - Setup Script       ║');
  console.log('╚═══════════════════════════════════════════════════╝\n');

  setupEnvFiles();
  setupPython();

  console.log('╔═══════════════════════════════════════════════════╗');
  console.log('║              ✅ Setup Complete!                    ║');
  console.log('╚═══════════════════════════════════════════════════╝\n');
  
  console.log('🚀 Next Steps:\n');
  console.log('1. Configure .env files with your database credentials');
  console.log('2. Run: docker-compose up -d (to start databases)');
  console.log('3. Run: npm run dev:all (to start all services)\n');
  console.log('📚 For more info, see README.md\n');
}

main();