# Exposed Metrics

**Difficulty**: :star2:

**Description**: Find the endpoint that serves usage data to be scraped by a [popular monitoring system](https://github.com/prometheus/prometheus).

**Category**: Sensitive Data Exposure

**Tags**: `Good Practice`

**Solution**:

Access this route: `http://localhost:3000/metrics`. Because Prometheus use `/metrics` route to inspect metrics, so I try to access this route to view sensitive metrics. 

![result](https://user-images.githubusercontent.com/64480713/179664330-9daa56f0-c3e3-4289-a730-6401f2b5ed3f.png)
