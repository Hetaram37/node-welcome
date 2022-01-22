module.exports = function(RED) {
    function WelcomeNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = {
                name: 'Welcome ' + config.name
            }
            node.send(msg);
        });
    }
    RED.nodes.registerType("welcome", WelcomeNode);
}