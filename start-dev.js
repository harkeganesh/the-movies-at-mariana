const { exec } = require('child_process');

function createVirtualEnv() {
    console.log('Creating virtual environment...');
    exec('python -m venv env', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error creating virtual environment: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log('Virtual environment created successfully.');
        activateVirtualEnv();
    });
}

function activateVirtualEnv() {
    console.log('Activating virtual environment...');
    const activateCommand = process.platform === 'win32' ? 'env\\Scripts\\activate.bat' : 'source env/bin/activate';
    exec(activateCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error activating virtual environment: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log('Virtual environment activated.');
        installBackendDependencies();
    });
}


function installBackendDependencies() {
    console.log('Installing backend dependencies...');
    exec('pip install -r requirements.txt', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error installing backend dependencies: ${error.message}`);
            return;
        }
        if (stderr) {
            // this might have pip upgrade command
            console.log(stderr)
        }
        console.log('Backend dependencies installed successfully.');
        startServers();
    });
}


function startServers() {
    console.log('Starting both servers...');
    exec('cd backend && python manage.py runserver', (err, stdout, stderr) => {
        if (err) {
            console.error('Error starting Django server:', err);
            return;
        }
        console.log(stdout);
        console.error(stderr);
    });

    exec('cd frontend && npm install && npm start', (err, stdout, stderr) => {
        if (err) {
            console.error('Error starting React server:', err);
            return;
        }
        console.log(stdout);
        console.error(stderr);
    });
    console.log('Both servers are running.');
}


createVirtualEnv();
