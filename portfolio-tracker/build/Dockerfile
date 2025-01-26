# Use the official Apache HTTP Server image as a base
FROM httpd:2.4

# Copy the HTML, CSS, and JS files to the Apache document root
#COPY index.html /usr/local/apache2/htdocs/
#COPY styles.css /usr/local/apache2/htdocs/
#COPY script.js /usr/local/apache2/htdocs/
COPY index.html /stock/portfolio-tracker/build/
COPY styles.css /stock/portfolio-tracker/build/
COPY Dashboard.html /stock/portfolio-tracker/build/

# Expose port 80
EXPOSE 80