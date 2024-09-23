/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "RIOT OS", "index.html", [
    [ "RIOT Documentation", "index.html", "index" ],
    [ "RIOT Vision", "vision.html", null ],
    [ "Roadmap", "roadmap.html", [
      [ "Network Stack High layers", "roadmap.html#autotoc_md2188", null ],
      [ "Network Stack Low layers", "roadmap.html#autotoc_md2189", null ],
      [ "Integrations", "roadmap.html#autotoc_md2190", null ],
      [ "Power Modes", "roadmap.html#autotoc_md2191", null ],
      [ "Peripheral drivers", "roadmap.html#autotoc_md2192", [
        [ "Timers", "roadmap.html#autotoc_md2193", null ],
        [ "SPI", "roadmap.html#autotoc_md2194", null ],
        [ "I2C", "roadmap.html#autotoc_md2195", null ],
        [ "GPIO", "roadmap.html#autotoc_md2196", null ],
        [ "ADC", "roadmap.html#autotoc_md2197", null ]
      ] ],
      [ "Software Updates", "roadmap.html#autotoc_md2198", null ],
      [ "Documentation", "roadmap.html#autotoc_md2199", null ],
      [ "Low-level Hardware Support", "roadmap.html#autotoc_md2200", null ],
      [ "Testing", "roadmap.html#autotoc_md2201", null ],
      [ "Security", "roadmap.html#autotoc_md2202", [
        [ "802.15.4 link layer security", "roadmap.html#autotoc_md2203", null ]
      ] ]
    ] ],
    [ "Creating modules", "creating-modules.html", [
      [ "The general structure", "creating-modules.html#the-general-structure", null ],
      [ "Module dependencies", "creating-modules.html#autotoc_md2205", null ],
      [ "Modules outside of RIOTBASE", "creating-modules.html#modules-outside-of-riotbase", null ],
      [ "Pseudomodules", "creating-modules.html#pseudomodules", null ],
      [ "Helper tools", "creating-modules.html#autotoc_md2206", null ]
    ] ],
    [ "Creating an application", "creating-an-application.html", [
      [ "The main function", "creating-an-application.html#the-main-function", null ],
      [ "The application's Makefile", "creating-an-application.html#the-applications-makefile", [
        [ "The minimal Makefile", "creating-an-application.html#the-minimal-makefile", null ],
        [ "How to handle unsupported boards?", "creating-an-application.html#handle-unsupported-boards", null ],
        [ "Including modules", "creating-an-application.html#including-modules", null ]
      ] ],
      [ "Helper tools", "creating-an-application.html#autotoc_md2207", null ],
      [ "Creating an out of tree application structure", "creating-an-application.html#autotoc_md2208", [
        [ "External Boards", "creating-an-application.html#autotoc_md2209", null ],
        [ "External Modules", "creating-an-application.html#autotoc_md2210", null ],
        [ "Extra Makefile Scaffolding", "creating-an-application.html#autotoc_md2211", null ]
      ] ]
    ] ],
    [ "Porting boards", "porting-boards.html", [
      [ "Porting flowchart", "porting-boards.html#porting-flowchart", null ],
      [ "General structure", "porting-boards.html#general-structure", [
        [ "Source files", "porting-boards.html#board-source-files", null ],
        [ "Makefiles", "porting-boards.html#autotoc_md2212", [
          [ "Makefile", "porting-boards.html#Makefile", null ],
          [ "Makefile.dep", "porting-boards.html#makefile-dep", [
            [ "Default configurations", "porting-boards.html#autotoc_md2213", null ]
          ] ],
          [ "Makefile.features", "porting-boards.html#makefile-features", null ],
          [ "Makefile.include", "porting-boards.html#makefile-include", null ]
        ] ],
        [ "Timer Configurations", "porting-boards.html#board-timer-configurations", null ],
        [ "doc.txt", "porting-boards.html#board-doc", null ]
      ] ],
      [ "Helper tools", "porting-boards.html#autotoc_md2214", null ],
      [ "Using Common code", "porting-boards.html#common-board-code", null ],
      [ "Boards outside of RIOTBASE", "porting-boards.html#boards-outside-of-riotbase", null ],
      [ "Tools", "porting-boards.html#boards-tools", null ],
      [ "Further reference", "porting-boards.html#further-reference", null ]
    ] ],
    [ "Writing a Device Driver in RIOT", "driver-guide.html", [
      [ "General Design Objectives", "driver-guide.html#driver-guide-design-objectives", null ],
      [ "General", "driver-guide.html#driver-guide-general", [
        [ "Documentation", "driver-guide.html#driver-guide-doc", null ],
        [ "Device descriptor and parameter configuration", "driver-guide.html#driver-guide-types", null ],
        [ "Default device configuration", "driver-guide.html#driver-guide-config", null ],
        [ "Compile-time configuration documentation", "driver-guide.html#driver-guide-doxygen", null ],
        [ "Initialization", "driver-guide.html#driver-guide-initialization", null ],
        [ "Return Values", "driver-guide.html#driver-guide-return-values", [
          [ "Documenting Return Values", "driver-guide.html#driver-guide-return-values-doc", null ]
        ] ],
        [ "General Device Driver Checklist", "driver-guide.html#driver-guide-general-checklist", null ],
        [ "Build system integration", "driver-guide.html#autotoc_md2215", [
          [ "Internal include files", "driver-guide.html#autotoc_md2216", null ],
          [ "External dependencies", "driver-guide.html#autotoc_md2217", null ]
        ] ],
        [ "Helper tools", "driver-guide.html#autotoc_md2218", null ]
      ] ],
      [ "Sensors", "driver-guide.html#driver-guide-sensors", [
        [ "SAUL", "driver-guide.html#driver-guide-saul", null ],
        [ "Initialization", "driver-guide.html#driver-guide-sensor-initialization", null ],
        [ "Value handling", "driver-guide.html#driver-guide-sensor-value-handling", [
          [ "Value semantics", "driver-guide.html#driver-guide-sensor-value-semantics", null ],
          [ "Typing", "driver-guide.html#driver-guide-sensor-types", null ]
        ] ],
        [ "Additional Sensor Driver Checklist", "driver-guide.html#driver-guide-sensor-checklist", null ]
      ] ],
      [ "Network devices", "driver-guide.html#driver-guide-netdev", [
        [ "Initialization", "driver-guide.html#driver-guide-netdev-init", null ],
        [ "netdev", "driver-guide.html#driver-guide-netdev-interface", null ],
        [ "Additional Network Device Driver Checklist", "driver-guide.html#driver-guide-netdev-checklist", null ]
      ] ],
      [ "TODO", "driver-guide.html#driver-guide-todo", null ]
    ] ],
    [ "Getting started", "getting-started.html", [
      [ "Downloading RIOT code", "getting-started.html#downloading-riot-code", null ],
      [ "Compiling RIOT", "getting-started.html#compiling-riot", [
        [ "Required Software for Development", "getting-started.html#setting-up-a-toolchain", [
          [ "Choosing an Operating System for the Development PC", "getting-started.html#autotoc_md2219", null ],
          [ "Common Tools", "getting-started.html#autotoc_md2220", null ],
          [ "Architecture: ARM7 and ARM Cortex M*", "getting-started.html#autotoc_md2221", null ],
          [ "Architecture: Xtensa", "getting-started.html#autotoc_md2222", [
            [ "ESP32", "getting-started.html#autotoc_md2223", null ],
            [ "ESP8266", "getting-started.html#autotoc_md2224", null ]
          ] ],
          [ "Architecture: AVR", "getting-started.html#autotoc_md2225", null ],
          [ "Architecture: RISC-V", "getting-started.html#autotoc_md2226", null ],
          [ "Architecture: MSP430", "getting-started.html#autotoc_md2227", null ],
          [ "Architecture: native", "getting-started.html#autotoc_md2228", null ]
        ] ],
        [ "The build system", "getting-started.html#the-build-system", null ],
        [ "Building and executing an example", "getting-started.html#building-and-executing-an-example", null ],
        [ "Configuring an application", "getting-started.html#configuring-an-application", null ],
        [ "Default configurations", "getting-started.html#default-configurations", null ]
      ] ],
      [ "Use Docker to build RIOT", "getting-started.html#docker", [
        [ "Setup", "getting-started.html#docker-setup", [
          [ "Installing docker", "getting-started.html#autotoc_md2229", null ],
          [ "Downloading and testing RIOT docker container", "getting-started.html#autotoc_md2230", null ]
        ] ],
        [ "Usage", "getting-started.html#autotoc_md2231", null ],
        [ "Troubleshooting", "getting-started.html#docker-troubleshooting", null ]
      ] ],
      [ "Generating compile_commands.json e.g. for code completion in IDEs", "getting-started.html#autotoc_md2232", null ],
      [ "Using the native port with networking", "getting-started.html#autotoc_md2233", [
        [ "Setting up a tap network", "getting-started.html#autotoc_md2234", null ]
      ] ]
    ] ],
    [ "Flashing via RIOT's Build System", "flashing.html", [
      [ "General Approach", "flashing.html#flashing-general", null ],
      [ "Supported Tools", "flashing.html#flashing-supported-tools", [
        [ "Compatibility Matrix of Generic Tools", "flashing.html#flashing-supported-tools-generic", null ],
        [ "Specialized Flashing Tools Per Platform", "flashing.html#flashing-supported-tools-special", [
          [ "AVR", "flashing.html#autotoc_md2235", null ],
          [ "CC13xx / CC26xx", "flashing.html#autotoc_md2236", null ],
          [ "CC2538", "flashing.html#autotoc_md2237", null ],
          [ "ESP8266 / ESP32 (Xtensa) / ESP32 (RISC-V)", "flashing.html#autotoc_md2238", null ],
          [ "LPC23xx", "flashing.html#autotoc_md2239", null ],
          [ "MSP430", "flashing.html#autotoc_md2240", null ],
          [ "nRF52", "flashing.html#autotoc_md2241", null ],
          [ "RP2040", "flashing.html#autotoc_md2242", null ],
          [ "SAM", "flashing.html#autotoc_md2243", null ],
          [ "STM32", "flashing.html#autotoc_md2244", null ]
        ] ]
      ] ],
      [ "Programmer Configuration", "flashing.html#flashing-configuration", [
        [ "OpenOCD Configuration", "flashing.html#flashing-configuration-openocd", [
          [ "OPENOCD_DEBUG_ADAPTER", "flashing.html#autotoc_md2245", null ],
          [ "OPENOCD_RESET_USE_CONNECT_ASSERT_SRST", "flashing.html#autotoc_md2246", null ],
          [ "OPENOCD_PRE_FLASH_CMDS", "flashing.html#autotoc_md2247", null ],
          [ "OPENOCD_PRE_VERIFY_CMDS", "flashing.html#autotoc_md2248", null ],
          [ "OPENOCD_PRE_FLASH_CHECK_SCRIPT", "flashing.html#autotoc_md2249", null ],
          [ "OPENOCD_CONFIG", "flashing.html#autotoc_md2250", null ],
          [ "OPENOCD_TRANSPORT", "flashing.html#autotoc_md2251", null ]
        ] ],
        [ "stm32flash Configuration", "flashing.html#flashing-configuration-stm32flash", null ],
        [ "MSPDEBUG Configuration", "flashing.html#flashing-configuration-mspdebug", null ]
      ] ],
      [ "Handling Multiple Boards With UDEV-Rules", "flashing.html#multiple-boards-udev", [
        [ "Handling Multiple Versions of the Same BOARD", "flashing.html#autotoc_md2252", null ],
        [ "Notes", "flashing.html#autotoc_md2253", null ],
        [ "Documentation:", "flashing.html#autotoc_md2254", null ]
      ] ],
      [ "Handling Multiple Boards Without UDEV-Rules", "flashing.html#multiple-boards-no-udev", null ],
      [ "Handling Multiple Boards: Simplest Approach", "flashing.html#multiple-boards-simple", [
        [ "Adding Board Filters", "flashing.html#autotoc_md2255", null ],
        [ "Advances Board Filters", "flashing.html#autotoc_md2256", null ]
      ] ]
    ] ],
    [ "Terminal programs configuration", "terminal-programs.html", [
      [ "Background", "terminal-programs.html#background", null ],
      [ "gtkterm", "terminal-programs.html#gtkterm", null ],
      [ "minicom", "terminal-programs.html#minicom", null ],
      [ "miniterm", "terminal-programs.html#miniterm", null ],
      [ "picocom", "terminal-programs.html#picocom", null ],
      [ "putty", "terminal-programs.html#putty", null ]
    ] ],
    [ "Running and creating tests", "running-and-creating-tests.html", [
      [ "Directory Structure", "running-and-creating-tests.html#autotoc_md2257", null ],
      [ "Running automated tests", "running-and-creating-tests.html#autotoc_md2258", [
        [ "Running single test", "running-and-creating-tests.html#autotoc_md2259", null ],
        [ "Running all test for particular board", "running-and-creating-tests.html#autotoc_md2260", null ],
        [ "Running tests that require a preliminary manual configuration", "running-and-creating-tests.html#autotoc_md2261", null ],
        [ "Running tests that require root privileges", "running-and-creating-tests.html#autotoc_md2262", null ],
        [ "Cleaning intermediate files", "running-and-creating-tests.html#autotoc_md2263", null ]
      ] ],
      [ "Implementing automated tests", "running-and-creating-tests.html#autotoc_md2264", [
        [ "Automated Tests Guidelines", "running-and-creating-tests.html#autotoc_md2265", null ],
        [ "Use expect() instead of assert()", "running-and-creating-tests.html#autotoc_md2266", null ],
        [ "Interaction through the uart", "running-and-creating-tests.html#autotoc_md2267", null ]
      ] ]
    ] ],
    [ "List of Features (Features as Build System Enties)", "md_doc_2doxygen_2src_2feature__list.html", [
      [ "Architecture Features", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2269", [
        [ "Word size", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2270", null ],
        [ "Architecture grouping", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2271", null ]
      ] ],
      [ "CPU Features", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2272", [
        [ "CPU Capabilities", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2273", [
          [ "Cortex M Specific Features", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2274", [
            [ "nRF Capabilities", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2275", null ]
          ] ],
          [ "AVR-8 Specific Features", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2276", [
            [ "ATmega Specific Features", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2277", null ],
            [ "ATxmega Specific Features", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2278", null ]
          ] ],
          [ "EFM32 Specific Features", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2279", null ],
          [ "ESP Specific Features", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2280", null ],
          [ "nordic nRF Specific Features", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2281", null ]
        ] ],
        [ "CPU Grouping", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2282", [
          [ "Atmel / Microchip AVR-8 Grouping", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2283", [
            [ "ATmega Grouping", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2284", null ],
            [ "ATxmega Grouping", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2285", null ]
          ] ],
          [ "ARM Cortex-M and Classic ARM Grouping", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2286", [
            [ "Atmel / Microchip SAM Grouping", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2287", [
              [ "SAM0 Grouping", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2288", null ],
              [ "SAM3 Grouping", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2289", null ]
            ] ],
            [ "GigaDevice Semiconductor Inc Grouping", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2290", null ],
            [ "nordic nRF Grouping", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2291", null ],
            [ "NXP Grouping", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2292", null ],
            [ "Nintendo Grouping", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2293", null ],
            [ "Raspberry Pi Grouping", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2294", null ],
            [ "Silicon Laboratories EFM32 Grouping", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2295", null ],
            [ "SiFive, Inc. Grouping", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2296", null ],
            [ "STMicroelectronics STM32 Grouping", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2297", null ],
            [ "Texas Instruments ARM MCU Grouping", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2298", null ]
          ] ],
          [ "Expressif ESP Grouping", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2299", null ],
          [ "Texas Instruments MSP430 MCU Grouping", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2300", null ]
        ] ]
      ] ],
      [ "Arduino Features", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2301", [
        [ "Arduino I/O Mapping Features", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2302", null ],
        [ "Arduino Form Factor Features", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2303", null ]
      ] ],
      [ "RAM Related Features", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2304", null ],
      [ "Bluetooth Low Energy Features", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2305", null ],
      [ "Toolchain Features", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2306", null ],
      [ "Peripheral Features", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2307", [
        [ "General-Purpose Input/Output (GPIO)", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2308", [
          [ "Pin Level Peripheral GPIO API", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2309", null ],
          [ "GPIO LL API", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2310", null ]
        ] ],
        [ "Serial Interfaces", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2311", [
          [ "UART Features", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2312", null ],
          [ "SPI Features", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2313", null ],
          [ "I²C Features", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2314", null ],
          [ "USB Features", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2315", null ]
        ] ],
        [ "Analog Features", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2316", null ],
        [ "Integrated Connectivity", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2317", null ],
        [ "SD / MMC Card Features", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2318", null ],
        [ "Flash Features", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2319", null ],
        [ "Other Peripheral Storage Features", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2320", null ],
        [ "Timer Features", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2321", [
          [ "High Frequency Timers", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2322", null ],
          [ "PTP Timers", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2323", null ]
        ] ],
        [ "Platform Specific", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2324", null ],
        [ "Cryptographic Features", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2325", null ]
      ] ],
      [ "Other Features", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2326", null ],
      [ "Board Features", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2327", [
        [ "STM32L496G Discovery Board Features", "md_doc_2doxygen_2src_2feature__list.html#autotoc_md2328", null ]
      ] ]
    ] ],
    [ "Kconfig in RIOT", "kconfig-in-riot.html", [
      [ "Overview", "kconfig-in-riot.html#kconfig-overview", [
        [ "Exposure", "kconfig-in-riot.html#autotoc_md2329", null ],
        [ "Assignment", "kconfig-in-riot.html#autotoc_md2330", null ],
        [ "Verification and application", "kconfig-in-riot.html#autotoc_md2331", null ]
      ] ],
      [ "User's guide to configure with Kconfig", "kconfig-in-riot.html#kconfig-users-guide", [
        [ "Configure using menuconfig", "kconfig-in-riot.html#configure-using-menuconfig", null ],
        [ "Configure using '.config' files", "kconfig-in-riot.html#configure-using-files", null ],
        [ "Application configuration with Kconfig", "kconfig-in-riot.html#app-config-kconfig", null ],
        [ "Configuration via environment variables", "kconfig-in-riot.html#env-config-kconfig", null ],
        [ "A note on the usage of CFLAGS", "kconfig-in-riot.html#autotoc_md2333", null ]
      ] ],
      [ "Integration into the build system", "kconfig-in-riot.html#kconfig-integration-into-build-system", [
        [ "Steps during the build process", "kconfig-in-riot.html#kconfig-steps-build-process", [
          [ "Module dependency resolution", "kconfig-in-riot.html#autotoc_md2335", [
            [ "Input", "kconfig-in-riot.html#autotoc_md2336", null ],
            [ "Output", "kconfig-in-riot.html#autotoc_md2337", null ]
          ] ],
          [ "Module listing", "kconfig-in-riot.html#autotoc_md2338", [
            [ "Input", "kconfig-in-riot.html#autotoc_md2339", null ],
            [ "Output", "kconfig-in-riot.html#autotoc_md2340", null ]
          ] ],
          [ "Merging all configuration sources", "kconfig-in-riot.html#kconfig-steps-merge-configs", [
            [ "Input", "kconfig-in-riot.html#autotoc_md2341", null ],
            [ "Output", "kconfig-in-riot.html#autotoc_md2342", null ]
          ] ],
          [ "Menuconfig execution (optional)", "kconfig-in-riot.html#autotoc_md2343", [
            [ "Input", "kconfig-in-riot.html#autotoc_md2344", null ],
            [ "Output", "kconfig-in-riot.html#autotoc_md2345", null ]
          ] ],
          [ "Generation of the autoconf.h header", "kconfig-in-riot.html#kconfig-steps-header-gen", [
            [ "Input:", "kconfig-in-riot.html#autotoc_md2346", null ],
            [ "Output:", "kconfig-in-riot.html#autotoc_md2347", null ]
          ] ],
          [ "Summary of files", "kconfig-in-riot.html#autotoc_md2348", null ]
        ] ],
        [ "Kconfig symbols in Makefiles", "kconfig-in-riot.html#autotoc_md2349", null ]
      ] ],
      [ "Transition phase", "kconfig-in-riot.html#kconfig-transition-phase", [
        [ "Making configuration via Kconfig optional", "kconfig-in-riot.html#kconfig-configuration-optional", null ],
        [ "Modelling CPUs and boards", "kconfig-in-riot.html#kconfig-cpu-boards-fekconfig-cpu-boards", [
          [ "CPUs", "kconfig-in-riot.html#autotoc_md2351", [
            [ "Example", "kconfig-in-riot.html#autotoc_md2352", null ]
          ] ],
          [ "Boards", "kconfig-in-riot.html#autotoc_md2353", [
            [ "Example", "kconfig-in-riot.html#autotoc_md2354", null ]
          ] ],
          [ "Default configurations", "kconfig-in-riot.html#autotoc_md2355", null ]
        ] ],
        [ "Summary of reserved Kconfig prefixes", "kconfig-in-riot.html#autotoc_md2356", null ]
      ] ],
      [ "Appendixes", "kconfig-in-riot.html#kconfig-appendixes", [
        [ "Appendix A: Check if a module or package is used", "kconfig-in-riot.html#kconfig-appendix-a", null ],
        [ "Appendix B: Difference between 'Kconfig' and '.config' files", "kconfig-in-riot.html#kconfig-appendix-b", null ],
        [ "Appendix C: Pitfall when using different configuration interfaces", "kconfig-in-riot.html#kconfig-appendix-c", null ],
        [ "Appendix D: A few key aspects while exposing a macro to Kconfig", "kconfig-in-riot.html#kconfig-appendix-d", null ]
      ] ],
      [ "Useful references", "kconfig-in-riot.html#kconfig-useful-references", null ]
    ] ],
    [ "Using C++ in RIOT", "using-cpp.html", [
      [ "Levels of Support", "using-cpp.html#levels-of-support", null ],
      [ "Using C++", "using-cpp.html#autotoc_md2360", null ],
      [ "RIOT Modules in C++", "using-cpp.html#cpp-in-riot", null ],
      [ "See Also", "using-cpp.html#see-also", null ]
    ] ],
    [ "Using Rust in RIOT", "using-rust.html", [
      [ "Examples", "using-rust.html#autotoc_md2361", null ],
      [ "IDE / editor setup", "using-rust.html#autotoc_md2362", null ],
      [ "How it works", "using-rust.html#autotoc_md2363", null ],
      [ "Library components in Rust", "using-rust.html#autotoc_md2364", null ],
      [ "Toolchain", "using-rust.html#toolchain", null ],
      [ "Maintenance", "using-rust.html#autotoc_md2365", null ]
    ] ],
    [ "Debugging Tools", "debugging-tools.html", [
      [ "Undefined Behavior Sanitizer (ubsan)", "debugging-tools.html#ubsan", [
        [ "Overview", "debugging-tools.html#autotoc_md2366", null ],
        [ "How to use", "debugging-tools.html#autotoc_md2367", null ]
      ] ]
    ] ],
    [ "Release cycle", "release-cycle.html", [
      [ "Download a release", "release-cycle.html#download", null ],
      [ "Point releases and hot fixes", "release-cycle.html#point-releases", null ]
    ] ],
    [ "IO-Mapping and Shields", "iomaps.html", [
      [ "Introduction", "iomaps.html#iomaps-intro", null ],
      [ "I/O Mappings", "iomaps.html#iomaps-mapping", [
        [ "Digital Pins", "iomaps.html#iomaps-mapping-gpio", null ],
        [ "Analog Pins", "iomaps.html#iomaps-mapping-adc", null ],
        [ "DAC Pins", "iomaps.html#iomaps-mapping-dac", null ],
        [ "PWM Pins", "iomaps.html#iomaps-mapping-pwm", null ],
        [ "UART Device", "iomaps.html#iomaps-mapping-uart", null ],
        [ "I²C Buses", "iomaps.html#iomaps-mapping-i2c", null ],
        [ "SPI Buses", "iomaps.html#iomaps-mapping-spi", null ]
      ] ],
      [ "Mechanical and Electrical Compatibility", "iomaps.html#iomaps-shields", null ]
    ] ],
    [ "Changelog", "changelog.html", [
      [ "Release 2024.01", "changelog.html#release-2024-01", null ],
      [ "Release 2023.10", "changelog.html#release-2023-10", null ],
      [ "Release 2023.07", "changelog.html#release-2023-07", null ],
      [ "Release 2023.04", "changelog.html#release-2023-04", null ],
      [ "Release 2023.01", "changelog.html#release-2023-01", null ],
      [ "Release 2022.10", "changelog.html#release-2022-10", null ],
      [ "Release 2022.07", "changelog.html#release-2022-07", null ],
      [ "Release 2022.04", "changelog.html#release-2022-04", null ],
      [ "Release 2022.01", "changelog.html#release-2022-01", null ],
      [ "Release 2021.10", "changelog.html#release-2021-10", null ],
      [ "Release 2021.07", "changelog.html#release-2021-07", null ],
      [ "Release 2021.04", "changelog.html#release-2021-04", null ],
      [ "Release 2021.01", "changelog.html#release-2021-01", null ],
      [ "Release 2020.10", "changelog.html#release-2020-10", null ],
      [ "Release 2020.07.1", "changelog.html#release-2020-07-1", null ],
      [ "Release 2020.07", "changelog.html#release-2020-07", null ],
      [ "Release 2020.04", "changelog.html#release-2020-04", null ],
      [ "Release 2020.01", "changelog.html#release-2020-01", null ],
      [ "Release 2019.10", "changelog.html#release-2019-10", null ],
      [ "Release 2019.07", "changelog.html#release-2019-07", null ],
      [ "Release 2019.04", "changelog.html#release-2019-04", null ],
      [ "Release 2019.01", "changelog.html#release-2019-01", null ],
      [ "Release 2018.10.1", "changelog.html#release-2018-10-1", null ],
      [ "Release 2018.10", "changelog.html#release-2018-10", null ],
      [ "Release 2018.07", "changelog.html#release-2018-07", null ],
      [ "Release 2018.04", "changelog.html#release-2018-04", null ],
      [ "Release 2018.01", "changelog.html#release-2018-01", null ],
      [ "Release 2017.10", "changelog.html#release-2017-10", null ],
      [ "Release 2017.07", "changelog.html#release-2017-07", null ],
      [ "Release 2017.04", "changelog.html#release-2017-04", null ],
      [ "Release 2017.01", "changelog.html#release-2017-01", null ],
      [ "Release 2016.10", "changelog.html#release-2016-10", null ],
      [ "Release 2016.07", "changelog.html#release-2016-07", null ],
      [ "Release 2016.04", "changelog.html#release-2016-04", null ],
      [ "Release 2015.12", "changelog.html#release-2015-12", null ],
      [ "Release 2015.09", "changelog.html#release-2015-09", null ],
      [ "Release 2014.12", "changelog.html#release-2014-12", null ],
      [ "Release 2014.05", "changelog.html#release-2014-05", null ],
      [ "Release 2014.01", "changelog.html#release-2014-01", null ],
      [ "Release 2013.08", "changelog.html#release-2013-08", null ]
    ] ],
    [ "Removed Features and Modules", "md_LOSTANDFOUND.html", [
      [ "How to read this list", "md_LOSTANDFOUND.html#autotoc_md2369", null ],
      [ "Removed Features", "md_LOSTANDFOUND.html#autotoc_md2370", null ]
    ] ],
    [ "Deprecated List", "deprecated.html", null ],
    [ "Todo List", "todo.html", null ],
    [ "Supported Boards", "group__boards.html", null ],
    [ "Modules", "topics.html", "topics" ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ]
      ] ]
    ] ],
    [ "Data Structures", "annotated.html", [
      [ "Data Structures", "annotated.html", "annotated_dup" ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Data Fields", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Symbols", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "Globals", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", "globals_vars" ],
        [ "Typedefs", "globals_type.html", "globals_type" ],
        [ "Enumerations", "globals_enum.html", "globals_enum" ],
        [ "Enumerator", "globals_eval.html", "globals_eval" ],
        [ "Macros", "globals_defs.html", "globals_defs" ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"6lo_8h.html",
"bit_8h.html",
"boards_2pyboard_2include_2periph__conf_8h.html",
"classSPIClass.html#a13cf0985428fd08a5e056c747e296cc1",
"classriot_1_1testing_1_1test__suite.html#a2da9b9b5efc6f74053529a087d1b88c3",
"cpu__qdec_8h.html",
"dir_1c26cf55dc7028676f3a2327b552ef98.html",
"dir_4e02d500b095c28b558405f536478658.html",
"dir_805b4c0bb2c11ee719a5caccbe75005c.html",
"dir_b01616286a484ef7022ddf73ec32f7aa.html",
"dir_e0160501f57f3c88f27cec5815f4bf92.html",
"dtls_8h.html",
"flashing.html#multiple-boards-udev",
"globals_eval_v.html",
"group__ble__defs.html#ga8724cba64fe25436e2e971d495534811",
"group__boards__feather-nrf52840.html",
"group__core__msg.html#ga01aee21f8554591c7933d4ba05cfe85b",
"group__cpu__atmega__common.html#gae40596feaa3f66f5440b485bf7c1c2d1",
"group__cpu__cortexm__common.html#ga39e0029ba147e7d54f774c88b0a6510d",
"group__cpu__sam0__common__sdhc.html#ga839e6ce7def511207d2feb0b3dd6022e",
"group__drivers__adcxx1c.html#gga85c7862086c1f92e4fb4108e176d8140acf37823193b631591e800b1bbd3b02e1",
"group__drivers__apds99xx.html#gab524bd71c1b612a5164cc4d3b741bc14",
"group__drivers__at86rf2xx.html#ga5bc17b7097dd6c0e0114d09cb246bf56",
"group__drivers__bmx055__config.html#gae18a2e0e44104a0648f00fcc22f04ca5",
"group__drivers__dfplayer.html#ga04d62731219ada06e9d8fe529495ad97",
"group__drivers__eeprom__native.html",
"group__drivers__hmc5883l.html",
"group__drivers__ina2xx.html#ga582e47ede3cda926a4347f93064b490f",
"group__drivers__ina3221.html#gaec14a0c4b5f0bb083b394a989a0d4969",
"group__drivers__itg320x.html#gga024f925f7c496983500513988cc0bb84a9b6ce6e25f5339a0305eec8f2b9bc75b",
"group__drivers__l3gxxxx.html#gga8e800b74cf431f9e1eb818be5ed93d6da701209c30f2a02217852be45c33b1675",
"group__drivers__lis2dh12.html#gaad8a8479ab005b3584df8b111f721699",
"group__drivers__lis3dh.html#gac2ed422e807877fbad0429446c1ac1a4",
"group__drivers__lsm6dsxx.html#ggad1df9dc2600f2dda7e99d31c00fd73e0ac2d1950cdd4e952128170764ac02b27a",
"group__drivers__mfrc522.html#ga9e7fee0db62c32a0f0c015239206688d",
"group__drivers__mpl3115a2.html#ggaa52ea6a123f47db5e6b145e5fc5e369aab1931c6701b58043e02e07b6e3cb1308",
"group__drivers__netdev__ieee802154.html#gga3c394bd0168c30eab6bc77ff9925d883a0602dddb309a71c4cae8975a684e959e",
"group__drivers__pca9633.html#ggacfca9e82d4222ad9621066e14da3132da04690f4ee5ed79668edf684d98002666",
"group__drivers__periph__gpio__ll.html#ga3e447d9407456facb037994934efd222",
"group__drivers__periph__spi.html#gada6e52541835bc04dcc6ec62f2c74c3a",
"group__drivers__pn532.html#ga655baa18d88943455a9d123dbf63f34e",
"group__drivers__saul.html#ggaa9908284c0827729f14cf9b2489e1479acf74fdc95ba37cbf5af192027f1b2547",
"group__drivers__sdmmc.html#gga0cb33b64a4279b29e816220206cc46b5a1952d40e7161e6169759704e368a5ffe",
"group__drivers__sht2x.html#ggaff44cf33e83896b8e5102305d23db5acaa343eac48c66cc1d1cfb33880818f0e7",
"group__drivers__srf02.html",
"group__drivers__tcs37727.html#gaff5677adb0695a8a6aa93c73cfdcfc42",
"group__drivers__vl6180x.html#ga3493c4777cea820dbf64e709265c95fd",
"group__fido2__ctap__crypto.html#ga900731ebbcd60ba176bae897e8cced94",
"group__lwm2m__objects__barometer.html#ga7dfb8a6245d224433309c8b3149c2b4a",
"group__lwm2m__objects__device__config.html#gae732a04905d2274783a12b6d06748d3c",
"group__lwm2m__objects__voltage__config.html",
"group__net__credman.html#ga0ccd41d107b04d4433f155edb38b210c",
"group__net__emcute__conf.html#gabed6c726e753ce4d5735e811ea8ec38c",
"group__net__gnrc__gomach__conf.html#gab8ef5fcbbb00a5f80cefe6190259c11f",
"group__net__gnrc__lorawan.html#gaa9b3684dffd361db2ac3bb19f45c7c77",
"group__net__gnrc__nettype.html#gga2582fbb16a318806983c225a69460902a42015eaedf9e1ee6186099ac71579021",
"group__net__gnrc__sixlowpan__config.html#gae40df851217f782ddbeb3f75bb3fc19a",
"group__net__ieee802154__conf.html#ga0baf932feaf6c2713abda8314ccba892",
"group__net__ipv6__addr.html#gad78d3186897a0f51084631e102d5d483",
"group__net__loramac__conf.html#ga9f29fa02d33dc83ae80cf8c8ddfba345",
"group__net__nanocoap__conf.html#ga8eb11ff8a82bff261d81101542d123d3",
"group__net__netopt.html#gga19e30424c1ab107c9c84dc0cb29d9906ad7e6f46992f3f041b1180dec7158e060",
"group__net__sixlowpan__nd.html#ga62cdb8b7ef37d2d47c0eac0fb2c0c5d0",
"group__net__sock__udp.html#gacc31d9fd5c02e95e4ca7257c808e53ac",
"group__pkg__lwip__sys.html#ga1771b7fb65ee640524d0052f229768c3",
"group__pkg__nimble__netif__conn.html#gac09196bc0c428dbfb2fbc9678035b612",
"group__posix__semaphore.html#ga77e321a5c305de05288c0cb7c4b23d61",
"group__sys__atomic__utils.html#ga92dac574e84e35e00251c3061984caf1",
"group__sys__chunk__buffer.html#ga4976327b8fe874dc9c49e378777b2780",
"group__sys__evtimer.html#ga2d1e6d8f761991154659d214a234b6a0",
"group__sys__littlefs2.html#ga1fcd10ae480b7243ca828024d0fd869f",
"group__sys__puf__sram.html#gafb5e933abd06c58d08f3ea0b87c57598",
"group__sys__spiffs.html#gae97a013a4953286557c82ad3b6b13880",
"group__sys__uri__parser.html#gad370292728b0290311388894bb7d2342",
"group__sys__ztimer64.html#ga1fbec3365c03bf865e09d2f6f08a87a6",
"group__usb__conf.html#ga69fbdf3da3e280eb9d19734531f8fda6",
"group__usb__usbus.html#gafdee0ccc89875478b524a4b838541569",
"iomaps.html#iomaps-mapping-dac",
"mag3110_8h.html",
"net_2gnrc_2pkt_8h.html",
"pkg_2lwip_2include_2lwip_2netif_2netdev_8h.html",
"samr34-xpro_2include_2gpio__params_8h.html",
"stm32_2include_2periph_2g0_2periph__cpu_8h.html",
"structadi__3__refsys__regs__t.html#ac1df484fb1d5e7673d4003db41cb2190",
"structapds99xx__params__t.html#a5e72cf4feaba8ec3f30d20d36c4c2ad4",
"structat86rf2xx__t.html#a7445c5866633f7d5bbe265c737c4fe7d",
"structaux__sysif__regs__t.html#a6a2ab18a07c2fbeb921d7901dec36c8f",
"structbmx280__calibration__t.html#a36b0cfce08e09d5ca40e49e4a1b3759a",
"structcandev__stm32__rx__fifo.html#a448f2d6e4e9d3524946cecff9abce66e",
"structcc2538__rfcore__t.html#adde711f87dde322a2989056506860faa",
"structcid__t.html#a2c65f20dc3535c848f03fcc5aaea2c87",
"structcontext__switch__frame.html#a3e7722eedee1c13c451cb447f310859a",
"structctap__req__t.html#a9a01463e033ee25e93b928b4663b8c42",
"structdhcpv6__relay__msg__t.html#a0a55ceb2072c0123731a6fe4c2704bca",
"structesp__eth__netdev__t.html",
"structfcfg__regs__t.html#afc1afbea4e1d070b9dc77f84099cc132",
"structfmc__sdram__timing__t.html#a60d0fdf530ff19c28bb0080df94214b3",
"structgnrc__lwmac__packet__info__t.html#a334b7b5aad2df7b4cc10a7315ef4ae8d",
"structgnrc__rpl__p2p__ext__t.html#a3e79e7022d24044d24c28643866bf7fc",
"structhdc1000__params__t.html#a76443072d293d583feb64d46b35b3ed0",
"structieee802154__radio__ops.html",
"structisotp__fc__options.html#a9194f02473362d4c7537bff6683b98c0",
"structl3gxxxx__t.html#a02f8104a5feec672eb9615f1b024036b",
"structlittlefs__desc__t.html#aabd528286119e1c7780d0c406f4e6cfe",
"structlwm2m__obj__ipso__sensor__base__args.html#a1f5aeb929a6a811298d0c80ca73e7554",
"structmma7660__params__t.html#a8c2181002f2eb3bec630a3cbe454e4ff",
"structmsp430__usart__spi__params__t.html#a6c1a9a7f2fd7ccdaf221c13d9b587662",
"structndp__opt__pi__t.html#ac53ad2b44ea5c658801f22a9b07f2953",
"structnimble__netif__accept__cfg__t.html#af768bb29f56e1d2552284442af570198",
"structpca9685__saul__pwm__params__t.html#a1ab767fae9932f49b9a4db4bfe73f8e7",
"structprcm__regs__t.html#ac2c5b84c61c7e02312b124ca543f64a3",
"structqmc5883l__params__t.html",
"structscheduler__vars__t.html#a4fbcab8e170b6b113444272d9825a1ea",
"structsdmmc__csd__v2__t.html",
"structsemtech__loramac__t.html",
"structskald__ctx__t.html#afc4ffd1c3011c68b2f906e97b6abca9f",
"structsock__udp__aux__tx__t.html#a3ea4d09400950372a0d9ce1b45611e05",
"structstm32__usbdev__fs__t.html#a77f73bfff01ce0302aeda19b6d33a9f4",
"structtimeval.html#a810bf8fcd58e255a5c1896d19538b86a",
"structuhcp__hdr__t.html#a53547dac092da725536502f160bfe859",
"structusbus__cdcecm__device.html#acf40a994623e4f58b1e0493185b09311",
"structvl6180x__params__t.html#aa3331bdbe9ffead1999020d9fdef4f9a",
"submac_8h_source.html",
"unionLIS2DH12__CTRL__REG6__t.html#aad6052e7aaae9a570f35fced0892a21b",
"unionsdmmc__card__status__t.html#a3687e0b35e3fe90aa793f6c49e17cd19"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';