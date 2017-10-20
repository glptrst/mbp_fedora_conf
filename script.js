var fs = require('fs');

// turn off red light
fs.readFile('/sys/module/snd_hda_intel/parameters/power_save', 'utf8', (err, data) => {
    if (err) {
	throw err;
    } else {
	if (data === '1\n') {
	    console.log('power_safe already set to 1');
	} else {
	    fs.writeFile('/sys/module/snd_hda_intel/parameters/power_save', '1', (err) => {
		if (err) throw err;
		console.log('power_save file written');
	    });
	}
    }
});
