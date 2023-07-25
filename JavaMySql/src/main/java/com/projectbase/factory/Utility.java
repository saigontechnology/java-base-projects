package com.projectbase.factory;

import java.util.regex.Pattern;

public class Utility{

    public static boolean patternMatches(String data, String regexPattern) {
        return Pattern.compile(regexPattern)
                .matcher(data)
                .matches();
    }
}
