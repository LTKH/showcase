var templates = [
    { 'url': '^/kubernetes.*', 'tmpl': '/templates/alerts.html' },
    { 'url': '^/vmetrics/[^/]+/targets', 'tmpl': '/templates/vmetrics/targets.html' },
    { 'url': '^/vmetrics/[^/]+/alerts', 'tmpl': '/templates/vmetrics/alerts.html' },
    { 'url': '^/prometheus/[^/]+/targets', 'tmpl': '/templates/vmetrics/targets.html' },
    { 'url': '^/prometheus/[^/]+/alerts', 'tmpl': '/templates/vmetrics/alerts.html' },
    { 'url': '^/vmetrics.*', 'tmpl': '/templates/vmetrics/main.html' },
    { 'url': '^/prom.*', 'tmpl': '/templates/content.html' },
    { 'url': '^/monitoring.*', 'tmpl': '/templates/alerts.html' },
    //{ 'url': '^/.*', 'tmpl': '/templates/main.html' }
];