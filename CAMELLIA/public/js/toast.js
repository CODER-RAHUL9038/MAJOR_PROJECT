/**
 * Modern Toast Notification System
 * Production-grade animated toasts
 */

const toastConfig = {
    duration: 4000,
    containerId: 'toast-container'
};

function createToastContainer() {
    let container = document.getElementById(toastConfig.containerId);
    if (!container) {
        container = document.createElement('div');
        container.id = toastConfig.containerId;
        container.className = 'toast-container position-fixed bottom-0 end-0 p-3';
        document.body.appendChild(container);
    }
    return container;
}

function showToast(message, type = 'info', title = '') {
    const container = createToastContainer();
    
    // Default titles based on type
    if (!title) {
        title = type.charAt(0).toUpperCase() + type.slice(1);
    }

    // Icons mapping (Font Awesome)
    const icons = {
        success: 'fa-solid fa-circle-check',
        error: 'fa-solid fa-circle-xmark',
        warning: 'fa-solid fa-triangle-exclamation',
        info: 'fa-solid fa-circle-info'
    };

    const iconClass = icons[type] || icons.info;

    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    
    toast.innerHTML = `
        <div class="toast-icon">
            <i class="${iconClass}"></i>
        </div>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close" aria-label="Close">
            <i class="fa-solid fa-xmark"></i>
        </button>
        <div class="toast-progress">
            <div class="toast-progress-bar" style="animation: toast-progress ${toastConfig.duration}ms linear forwards"></div>
        </div>
    `;

    container.appendChild(toast);

    // Auto-dismiss
    const timeout = setTimeout(() => {
        dismissToast(toast);
    }, toastConfig.duration);

    // Manual close
    toast.querySelector('.toast-close').addEventListener('click', () => {
        clearTimeout(timeout);
        dismissToast(toast);
    });

    // Pause on hover
    toast.addEventListener('mouseenter', () => {
        const progressBar = toast.querySelector('.toast-progress-bar');
        if (progressBar) progressBar.style.animationPlayState = 'paused';
        clearTimeout(timeout);
    });

    toast.addEventListener('mouseleave', () => {
        const progressBar = toast.querySelector('.toast-progress-bar');
        if (progressBar) progressBar.style.animationPlayState = 'running';
        
        // Simpler approach for resume: just restart a shorter timeout
        setTimeout(() => {
            dismissToast(toast);
        }, 1500); 
    });
}

function dismissToast(toast) {
    if (toast.classList.contains('hiding')) return;
    
    toast.classList.add('hiding');
    
    // Snappier transition for hiding
    toast.style.transition = 'all 0.3s ease-in';
    
    toast.addEventListener('animationend', (e) => {
        if (e.animationName === 'toast-slide-out') {
            toast.remove();
        }
    });
}

// Initialize flash messages from global window object
document.addEventListener('DOMContentLoaded', () => {
    if (window.flashMessages) {
        const types = ['success', 'error', 'warning', 'info'];
        types.forEach(type => {
            const messages = window.flashMessages[type];
            if (Array.isArray(messages)) {
                messages.forEach(msg => {
                    if (msg) showToast(msg, type);
                });
            }
        });
    }
});
