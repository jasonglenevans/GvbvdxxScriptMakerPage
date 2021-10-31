const fr = new FileReader();
fr.readAsArrayBuffer(file);
fr.onloadend = heap => this.worker.postMessage({
    command: 'TransferProfile',
    data: {
        heap
    }
}, [heap]); //Passing [heap] as a 2nd parameter flags it as Transferable