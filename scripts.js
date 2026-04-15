document.addEventListener('DOMContentLoaded', function() {
    const jobForm = document.getElementById('jobApplicationForm');
    
    if (jobForm) {
        // ===== VALIDACIÓN EN TIEMPO REAL =====
        const dniInput = document.getElementById('dni');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        
        if (dniInput) {
            dniInput.addEventListener('input', function() {
                const value = this.value;
                const isDNI = /^[0-9]{8}$/.test(value);
                const isCE = /^[0-9]{9,12}$/.test(value);
                
                if (value.length > 0) {
                    if (isDNI) {
                        this.style.borderColor = '#2ecc71';
                        this.style.backgroundColor = '#f0fff0';
                    } else if (isCE) {
                        this.style.borderColor = '#2ecc71';
                        this.style.backgroundColor = '#f0fff0';
                    } else {
                        this.style.borderColor = '#e74c3c';
                        this.style.backgroundColor = '#fff0f0';
                    }
                } else {
                    this.style.borderColor = '#d4ffd4';
                    this.style.backgroundColor = '#f9fff9';
                }
            });
        }
        
        if (emailInput) {
            emailInput.addEventListener('input', function() {
                if (this.value.length > 0) {
                    if (validateEmail(this.value)) {
                        this.style.borderColor = '#2ecc71';
                        this.style.backgroundColor = '#f0fff0';
                    } else {
                        this.style.borderColor = '#e74c3c';
                        this.style.backgroundColor = '#fff0f0';
                    }
                } else {
                    this.style.borderColor = '#d4ffd4';
                    this.style.backgroundColor = '#f9fff9';
                }
            });
        }
        
        if (phoneInput) {
            phoneInput.addEventListener('input', function() {
                formatPhoneNumber(this);
            });
        }
        
        // ===== VERIFICAR ARCHIVO SUBIDO =====
        const cvInput = document.getElementById('cv');
        const verifyButton = document.getElementById('verifyFile');
        const fileStatus = document.getElementById('fileStatus');
        
        if (verifyButton && cvInput) {
            verifyButton.addEventListener('click', function(e) {
                e.preventDefault();
                
                if (cvInput.files.length > 0) {
                    const file = cvInput.files[0];
                    const maxSize = 5 * 1024 * 1024; // 5MB
                    const allowedTypes = ['.pdf', '.doc', '.docx'];
                    const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
                    
                    if (file.size > maxSize) {
                        fileStatus.innerHTML = '<span style="color: #e74c3c;"><i class="fas fa-times-circle"></i> El archivo excede 5MB</span>';
                        showNotification('El archivo es demasiado grande (máx. 5MB)', 'error');
                    } else if (!allowedTypes.includes(fileExtension)) {
                        fileStatus.innerHTML = '<span style="color: #e74c3c;"><i class="fas fa-times-circle"></i> Formato no permitido. Use PDF, DOC o DOCX</span>';
                        showNotification('Formato de archivo no válido', 'error');
                    } else {
                        fileStatus.innerHTML = `<span style="color: #2ecc71;"><i class="fas fa-check-circle"></i> Archivo verificado: ${file.name}</span>`;
                        showNotification('Archivo verificado correctamente', 'success');
                    }
                } else {
                    fileStatus.innerHTML = '<span style="color: #e74c3c;"><i class="fas fa-exclamation-triangle"></i> No hay archivo seleccionado</span>';
                    showNotification('Seleccione un archivo primero', 'error');
                }
            });
        }
        
        // ===== ENVÍO DEL FORMULARIO =====
        jobForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validar todos los campos requeridos
            const requiredFields = jobForm.querySelectorAll('[required]');
            let isValid = true;
            let firstError = null;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#e74c3c';
                    if (!firstError) firstError = field;
                } else {
                    field.style.borderColor = '#d4ffd4';
                }
            });
            
            // Validar email
            const email = document.getElementById('email').value;
            if (email && !validateEmail(email)) {
                isValid = false;
                document.getElementById('email').style.borderColor = '#e74c3c';
                if (!firstError) firstError = document.getElementById('email');
                showNotification('Ingrese un correo electrónico válido', 'error');
            }
            
            // Validar DNI/CE
            const dni = document.getElementById('dni').value;
            if (dni && !validateDNI(dni) && !validateCE(dni)) {
                isValid = false;
                document.getElementById('dni').style.borderColor = '#e74c3c';
                if (!firstError) firstError = document.getElementById('dni');
                showNotification('Ingrese un DNI (8 dígitos) o CE (9-12 dígitos) válido', 'error');
            }
            
            // Validar aceptación de privacidad
            const privacy = document.getElementById('privacy');
            if (privacy && !privacy.checked) {
                isValid = false;
                showNotification('Debe aceptar la política de privacidad', 'error');
            }
            
            // Validar CV
            const cv = document.getElementById('cv');
            if (cv && cv.files.length === 0) {
                isValid = false;
                showNotification('Debe adjuntar su CV', 'error');
            }
            
            if (!isValid) {
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    firstError.focus();
                }
                return;
            }
            
            // ===== SIMULACIÓN DE ENVÍO A almacen@grupojuditex.com =====
            const submitBtn = jobForm.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;
            
            // Recopilar datos del formulario
            const formData = new FormData(jobForm);
            
            // Construir mensaje para el correo
            let emailBody = `
                ========================================
                NUEVA POSTULACIÓN - GRUPO JUDITEX
                ========================================
                
                CARGO AL QUE POSTULA: ${formData.get('position')}
                
                DATOS PERSONALES:
                ------------------
                Nombre Completo: ${formData.get('fullname')}
                Email: ${formData.get('email')}
                Teléfono: ${formData.get('phone')}
                Ciudad/Lugar: ${formData.get('city')}
                País: ${formData.get('country')}
                
                INFORMACIÓN PROFESIONAL:
                -------------------------
                Especialidad: ${formData.get('specialty')}
                N° DNI/CE/Pasaporte: ${formData.get('dni')}
                Años de experiencia: ${formData.get('experience')}
                Sexo: ${formData.get('gender')}
                
                CARTA DE PRESENTACIÓN:
                -----------------------
                ${formData.get('cover_letter') || 'No adjuntó carta de presentación'}
                
                ========================================
                CV ADJUNTO: ${cv.files[0].name}
                ========================================
            `;
            
            // Simular envío (en producción usar fetch con Formspree, EmailJS o backend)
            setTimeout(() => {
                console.log('Enviando a: almacen@grupojuditex.com');
                console.log(emailBody);
                
                // Mostrar mensaje de éxito
                showNotification('¡Postulación enviada con éxito! Nos contactaremos pronto.', 'success');
                
                // Resetear formulario
                jobForm.reset();
                
                // Limpiar indicadores visuales
                document.querySelectorAll('.form-control').forEach(field => {
                    field.style.borderColor = '#d4ffd4';
                    field.style.backgroundColor = '#f9fff9';
                });
                
                if (fileStatus) {
                    fileStatus.innerHTML = '';
                }
                
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Scroll al inicio
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 2000);
        });
    }
    
    // ===== MOSTRAR MODAL DE POLÍTICA DE PRIVACIDAD =====
    const privacyLink = document.querySelector('.privacy-link');
    if (privacyLink) {
        privacyLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10001;
            `;
            
            modal.innerHTML = `
                <div style="
                    background: white;
                    max-width: 600px;
                    max-height: 80vh;
                    overflow-y: auto;
                    padding: 30px;
                    border-radius: 20px;
                    position: relative;
                    margin: 20px;
                    border: 3px solid #2ecc71;
                ">
                    <button onclick="this.closest('div').parentElement.remove()" style="
                        position: absolute;
                        top: 15px;
                        right: 15px;
                        background: #e74c3c;
                        color: white;
                        border: none;
                        width: 35px;
                        height: 35px;
                        border-radius: 50%;
                        cursor: pointer;
                        font-size: 1.2rem;
                    "><i class="fas fa-times"></i></button>
                    
                    <h2 style="color: #0d3b23; margin-bottom: 20px;">
                        <i class="fas fa-shield-alt" style="color: #2ecc71;"></i> 
                        Política de Privacidad
                    </h2>
                    
                    <div style="color: #2c5e3a; line-height: 1.8;">
                        <p><strong>Última actualización:</strong> Enero 2024</p>
                        
                        <h3 style="margin-top: 20px; color: #0d3b23;">1. Responsable del Tratamiento</h3>
                        <p>GRUPO JUDITEX, con domicilio en Lima, Perú, es el responsable del tratamiento de sus datos personales.</p>
                        
                        <h3 style="margin-top: 20px; color: #0d3b23;">2. Finalidad del Tratamiento</h3>
                        <p>Sus datos serán utilizados exclusivamente para:</p>
                        <ul style="margin-left: 20px;">
                            <li>Gestionar su postulación a ofertas laborales</li>
                            <li>Contactarle para entrevistas o seguimiento</li>
                            <li>Mantener una base de datos de candidatos</li>
                        </ul>
                        
                        <h3 style="margin-top: 20px; color: #0d3b23;">3. Plazo de Conservación</h3>
                        <p>Sus datos serán conservados por un período máximo de 12 meses desde su postulación.</p>
                        
                        <h3 style="margin-top: 20px; color: #0d3b23;">4. Derechos del Titular</h3>
                        <p>Usted puede ejercer sus derechos de acceso, rectificación, cancelación y oposición escribiendo a: 
                        <a href="mailto:privacidad@grupojuditex.com" style="color: #2ecc71;">privacidad@grupojuditex.com</a></p>
                        
                        <h3 style="margin-top: 20px; color: #0d3b23;">5. Seguridad</h3>
                        <p>Implementamos medidas técnicas y organizativas para proteger sus datos contra accesos no autorizados.</p>
                        
                        <h3 style="margin-top: 20px; color: #0d3b23;">6. Excepciones</h3>
                        <p>No compartiremos sus datos con terceros, excepto:</p>
                        <ul style="margin-left: 20px;">
                            <li>Por obligación legal</li>
                            <li>Empresas del mismo grupo empresarial</li>
                            <li>Proveedores de servicios de reclutamiento autorizados</li>
                        </ul>
                        
                        <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #d4ffd4;">
                            <i class="fas fa-check-circle" style="color: #2ecc71;"></i> 
                            Al enviar este formulario, usted declara haber leído y aceptado esta política de privacidad.
                        </p>
                    </div>
                    
                    <button onclick="this.closest('div').parentElement.remove()" style="
                        background: #2ecc71;
                        color: #0a2a1a;
                        border: none;
                        padding: 12px 30px;
                        border-radius: 50px;
                        font-weight: bold;
                        cursor: pointer;
                        margin-top: 20px;
                        width: 100%;
                    ">
                        <i class="fas fa-check"></i> Entendido
                    </button>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Cerrar al hacer clic fuera
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        });
    }
});