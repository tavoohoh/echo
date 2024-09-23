package com.tavoohoh.plugin.capacitorkustomer;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "GsCapacitorKustomer")
public class GsCapacitorKustomerPlugin extends Plugin {

    private GsCapacitorKustomer implementation = new GsCapacitorKustomer();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);

        if (value.equals("kustomerOpenChat")) {
            String email = call.getString("email");
            String jwtToken = call.getString("jwtToken");
            KustomerKt.open(email, jwtToken);
        }

        if (value.equals("kustomerSignOut")) {
            KustomerKt.logout();
        }

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.resolve(ret);
    }
}
