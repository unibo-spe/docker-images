cat /dev/random | head -n 1 | base64 > /data/`hostname`.txt; cat /data/`hostname`.txt
