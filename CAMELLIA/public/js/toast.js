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
        progressBar.style.animationPlayState = 'paused';
        clearTimeout(timeout);
    });

    toast.addEventListener('mouseleave', () => {
        const progressBar = toast.querySelector('.toast-progress-bar');
        progressBar.style.animationPlayState = 'running';
        
        // Calculate remaining time
        // Note: Simple implementation, doesn't perfectly sync with progress bar 
        // but feels okay for UX.
        setTimeout(() => {
            dismissToast(toast);
        }, 2000); // Give it some extra time
    });
}

function dismissToast(toast) {
    toast.classList.add('hiding');
    toast.addEventListener('animationend', (e) => {
        if (e.animationName === 'toast-slide-out') {
            toast.remove();
            
            // Remove container if empty
            const container = document.getElementById(toastConfig.containerId);
            if (container && container.childNodes.length === 0) {
                // container.remove(); // Keep container for performance if many toasts expected
            }
        }
    });
}

// Initialize flash messages from data attributes
document.addEventListener('DOMContentLoaded', () => {
    const flashData = document.getElementById('flash-data');
    if (flashData) {
        try {
            const types = ['success', 'error', 'warning', 'info'];
            types.forEach(type => {
                const data = flashData.getAttribute(`data-${type}`);
                if (data) {
                    const messages = JSON.parse(data);
                    if (Array.isArray(messages)) {
                        messages.forEach(msg => {
                            if (msg) showToast(msg, type);
                        });
                    }
                }
            });
        } catch (e) {
            console.error('Error parsing flash data:', e);
        }
    }
});
