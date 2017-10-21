var fs = require('fs');

//function keys: set fnmode to 2
fs.readFile('/sys/module/hid_apple/parameters/fnmode', 'utf8', (err, data) => {
    if (err){
	throw err;
    } else {
	if (data === '2\n') {
	    console.log('fnmode already set to 2');
	} else {
	    fs.writeFile('/sys/module/hid_apple/parameters/fnmode', '1', (err) => {
		if (err)
		    throw err;
		else 
		    console.log('fnmode file written');
	    });
	}
    }
});

// turn off red light: set power_save to 1
fs.readFile('/sys/module/snd_hda_intel/parameters/power_save', 'utf8', (err, data) => {
    if (err) {
	throw err;
    } else {
	if (data === '1\n') {
	    console.log('power_safe already set to 1');
	} else {
	    fs.writeFile('/sys/module/snd_hda_intel/parameters/power_save', '1', (err) => {
		if (err)
		    throw err;
		else
		    console.log('power_save file written');
	    });
	}
    }
});
