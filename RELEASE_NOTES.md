# Release notes for Warp10 Photon

## Version 1.0.25

- Fix #27 - Easy way to plot all series (error in select all function)

## Version 1.0.24

- Fix #25 - Put permalink in URL fragment after every execution
- Fix #23 - Link to GitHub
- Fix #21 - Make background white again!

## Version 1.0.23

- Fixing minor bugs with permalinks

## Version 1.0.22

- Fix #1 - At last we support permalinks! Compatible with old Quantum permalinks

## Version 1.0.21

- Fix #18 - Local warp default backend URL
- Fix #15 - Error when moving a series

## Version 1.0.20

- Fix #14 - More explicit visual indication of open tree in response inspector

## Version 1.0.19

- Fix #13 - Photon incorrectly reports X-Warp10-Elapsed when in seconds

## Version 1.0.18

- Hotkeys for select timeseries to plot by regexp ([hotkey support](https://github.com/LostInBrittany/warp10-photon/issues/4))

## Version 1.0.17

- Hotkeys for 'plot all' and 'plot none' ([hotkey support](https://github.com/LostInBrittany/warp10-photon/issues/4))

## Version 1.0.16

- Adding support for "special" chars like `/` as hotkeys
- Refactoring code
- Setting white background

## Version 1.0.15

-Fixing some minor bug (errors in console), refining hotkey help panel to improve [hotkey support](https://github.com/LostInBrittany/warp10-photon/issues/4)

## Version 1.0.14

- Migrating from `hotkeys-js` to `@lostinbrittany/shortcuts`, adding ctrl+e shortcut inside editor, all to improve [hotkey support](https://github.com/LostInBrittany/warp10-photon/issues/4)

## Version 1.0.13

- Quick fix to [hotkey support](https://github.com/LostInBrittany/warp10-photon/issues/4): make hotkeys not work while editing fields

## Version 1.0.12

- Improving [hotkey support](https://github.com/LostInBrittany/warp10-photon/issues/4), `h` as hotkey help

## Version 1.0.11

- Adding `e` and `r` as execute hotkey

## Version 1.0.10

- Fix bug #8 - plot not working after edit

## Version 1.0.9

- Adding stack position to the series legend under the graph

## Version 1.0.8

- Adding Travis build, removing unused dependencies

## Version 1.0.7

- Recovering context on reload: at every WarpScript execution, the context (script and backend) is saved on session storage. The last saved context is restored at reload.