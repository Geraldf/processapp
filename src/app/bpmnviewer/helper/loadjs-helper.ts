export class LoadjsHelper {
  loadAPI: Promise<any>;

constructor() {
    this.loadAPI = new Promise((resolve) => {
        this.loadScript();
        resolve(true);
    });
}

public loadScript() {
    let isFound = false;
    const scripts = document.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; ++i) {
        if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes('loader')) {
            isFound = true;
        }
    }

    if (!isFound) {
        const dynamicScripts = ['https://widgets.skyscanner.net/widget-server/js/loader.js'];

        for (let i = 0; i < dynamicScripts .length; i++) {
            const node = document.createElement('script');
            node.src = dynamicScripts [i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
        }

    }
}
}
