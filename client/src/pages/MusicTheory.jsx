function MusicTheory(props) {
  return (
    <div id='music-theory' className="container center">
      <h2>Music Theory</h2>
      <div className='column narrow'>
        <div className='item'>
          <h3 id='sound'>
            Sound
          </h3>
          <p>
            Sound is the perceived experience of acoustic vibrations.
            This is a complicated definition for a simple experience.
            We passively hear sound as a result of compression waves traveling through the air.
            When we hear a sound caused by vibrations at a stable frequency, we perceive the sound as having a pitch.
            Pitch is the quality of a sound produced by vibrations at a specific frequency.
            Slow vibrations are perceived as a low tone and faster vibrations are perceived as sounding higher.
            By labeling some of these frequencies with letters, we can more easily communicate and analyze patterns in pitches.
          </p>
        </div>
        <div className='item'>
          <h3 id='pitch'>
            Pitch
          </h3>
          <p>
            Pitches are named using letters, A to G.
            Starting at A and continuing through G, the pitches are perceived as higher.
            After G, higher pitches are labeled starting over with A.
            The pitches labeled A through G are referred to as the natural tones.
            In addition to these 7 pitches, there are other pitches we can write using flats (b) or sharps (#).
            Flats and sharps are referred to as accidentals.
            We will discuss accidentals more shortly.
          </p>
        </div>
        <div className='item'>
          <h3 id='notes'>
            Notes
          </h3>
          <p>
            Notes are written representations of musical sounds.
            Every note specifies the pitch and duration of a sound.
            However, it is common for people to say note when they mean pitch.
            I might use the term note when I mean pitch if it is clear in context.
          </p>
        </div>
        <div className='item'>
          <h3 id='octaves'>
            Octaves
          </h3>
          <p>
            You might be asking, why do pitch names start again with A after G?
            The reason is that in our perception, two pitches will sound very similar when one is exactly twice the frequency of the other.
            While they are different pitches, we often consider them interchangeable.
            For this reason each pitch name (ex F) represents multiple frequencies.
            The technical way to say this is that each name represents a "pitch class".
            To specify a single frequency, we also need to include the octave number by adding a number after the letter (ex F3).
            This is usually unnecessary information and is omitted.
          </p>
        </div>
        <div className='item'>
          <h3 id='intervals'>
            Intervals
          </h3>
          <p>
            An interval is the distance between two pitches.
            The smallest interval in Western music is called a half-step.
            Accidentals (sharps and flats) adjust a note's pitch by a half-step by a half-step.
            Writing a sharp (#) after a pitch specifies a pitch one half-step higher.
            Writing a flat (b) after a pitch specifies a pitch one half-step lower.
          </p>
          <p>
            The next smallest interval is a whole step. 2 half-steps are equal to a whole step.
            The distance between most natural notes (A, B, C, D, …) is a whole step.
            However, the distance between both E and F and B and C are only half-steps.
            Laid out evenly:
          </p>
          <img className='full' src='/images/music-theory/chromatic.png' alt='chromatic' />
          <p>
            The piano is a good way to visualize this pattern.
            All of the natural tones are played with white keys.
            Black keys play pitches with accidentals.
            Every key on the piano plays a pitch one half-step from the two beside it.
            Since E and F and B and C are only a half-step apart, there is no black key in between those keys on the piano.
          </p>
          <img className='full' src='/images/music-theory/keyboard.png' alt='keyboard' />
          <p>
            This pattern probably seems odd, but will make sense when we discuss the major scale.
          </p>
          <p>
            If you start on any pitch and count the half steps to the next pitch with the same name, you will count 12 half-steps.
            This means that there are 12 half-steps (6 whole steps) in an octave.
            Since each named pitch is a half-step away from the next, there are 12 different pitch classes.
          </p>
        </div>
        <div className='item'>
          <h3 id='harmonic-equivalence'>
            Harmonic Equivalence
          </h3>
          <p>
            You might notice that pitches with accidentals each have two names.
            For instance, one pitch above is labeled both C# and Db.
            Depending on the key, it makes more sense to refer to this pitch by one name or the other.
            Two notes with different names but the same pitch are said to be "harmonically equivalent".
            The reason why the same pitch might need different names will become more clear once we start discussing keys and scales.
          </p>
        </div>
        <div className='item'>
          <h3 id='chromatic-scale'>
            Chromatic Scale
          </h3>
          <p>
            Simply put, a scale is a pattern of pitches.
            We define scales as the series of intervals it takes to get from one pitch to the next.
            While discussing pitch, we inadvertently discussed one scale already: the chromatic scale.
            In the chromatic scale, every interval is a half-step.
            Since every pitch in Western music is a half-step away, the chromatic scale includes every pitch.
          </p>
          <p>
            Chromatic Scale: C, C#, D, D#, E, F, F#, G, G#, A, A#, B, C
          </p>
          <p>
            Since a scale is defined as a series of intervals, we can apply this pattern to any starting pitch.
            Since I started on a C we could refer to this scale as the C chromatic scale.
            However, since the pitches included in the scale will be the same regardless of starting pitch, it is usually referred to as just the chromatic scale.
            Scales end on the same pitch they started with since the pattern repeats at octaves.
          </p>
        </div>
        <div className='item'>
          <h3 id='major-scale'>
            Major Scale
          </h3>
          <p>
            Modern Western music is built around a scale called the major scale.
            The series of intervals that make the major scale is W W H W W W H (W=whole step; H=half step).
            I encourage you to play these pitches if you can and I expect that the pattern will sound very familiar.
            This is because most Western music is based around this pattern.
            In fact, the pattern is so fundamental to Western music theory, it is reflected in the pitch names themselves.
            Starting on a C, the intervals of the natural tones are the same as the major scale.
            Therefore, if you start on a C and play all the white keys up to the next C, you have played a C major scale.
          </p>
          <img className='full' src='/images/music-theory/keyboard-with-intervals.png' alt='keyboard-with-intervals' />
        </div>
        <div className='item'>
          <h3 id='key'>
            Key
          </h3>
          <p>
            The concept of key is very closely related to scales.
            While scales consist of several pitches played in a sequence, keys are the set of all the pitches in a particular scale.
            Each scale defines a key with the same name.
            For example, the pitches in the C major scale define the key of C major.
            While the order of pitches is important when playing a scale, order of pitches does not matter when playing in a key.
            Since all the white keys are in the C major scale, if you play random white keys, you are in the key of C major.
          </p>
        </div>
        <div className='item'>
          <h3 id='sheet-music'>
            Sheet Music
          </h3>
          <p>
            Before we get too far into things, it's helpful to discuss how music is written.
            Traditionally, music is written down as "sheet music".
          </p>
          <p>
            Notes are written on a staff.
            The staff has five lines with spaces in between.
            Each line and space is used to represent a different pitch.
            Ledger lines can also be added to show notes above or below the staff.
            Where the notes are placed depends on the "clef" or symbol at the far left of the staff.
            You can write any pitch with any clef, but different clefs are used for different instruments so that most notes lay on the staff.
          </p>
          <img className='full' src='/images/music-theory/sheet-music.png' alt='sheet-music' />
        </div>
        <div className='item'>
          <h3 id='circle-of-fifths'>
            Circle of Fifths
          </h3>
          <div className="row">
            <div className="column">
              <p>
                C is the key used most often when discussing music theory.
                This is because C major has no sharps or flats.
                However, C is just one of the 12 different pitches in the chromatic scale.
                Since there are 12 options for the first pitch, there are 12 different major scales.
                Likewise, there are 12 different major keys.
                Each one of these keys is a unique combination of 7 of the 12 chromatic pitches.
              </p>
              <img class='circle-of-fifths-diagram-mobile mobile' src='/images/music-theory/circle-of-fifths.png' alt='circle-of-fifths' />
              <p>
                Unlike the key of C, every other key has at least one sharp or flat.
                Another way to say that, is at starting on a pitch other than C and playing the major scale will include pitches with accidentals.
                When reading sheet music, musicians look at the staff for accidentals to determine what key the music is in.
              </p>
            </div>
            <img class='circle-of-fifths-diagram-desktop desktop' src='/images/music-theory/circle-of-fifths.png' alt='circle-of-fifths' />
          </div>
          <p>
            If we wanted to play in the key of D major, we could find these pitches by starting on a D and playing a major scale.
            This would give us D E F# G A B C#.
            Since F and C are sharp in the D major scale, we write those accidentals at the beginning of the staff.
            This means whenever we see an F or C on the staff, play it sharp, unless otherwise indicated.
          </p>
          <p>
            One way people visualize this is called the circle of fifths.
            The circle of fifths shows all 12 possible keys arranged by the interval of a "perfect fifth", the distance between the first and fifth notes of the major scale.
            At first, this might seem like an odd choice.
            However, if you look at the accidentals in each key, you can see that adjacent keys share most of the same pitches.
            Since G major has only one sharp, C and G share 6 of 7 pitches.
          </p>
        </div>
        <div className='item'>
          <h3 id='minor'>
            Minor
          </h3>
          <p>
            So far, I have only mentioned one scale: the major scale.
            There are, however, other scales that follow different patterns of intervals between pitches.
            The minor scale, for instance, follows the pattern W H W W H W W.
            That means the C minor scale would be C D Eb F G Ab Bb.
            The key of C minor includes all the pitches in this scale and is represented by flats on the B, E, and A ledger lines.
            If you look at the circle of fifths, this group of flats matches those in Eb major.
            This is because the pitches in C minor are the same as those in Eb major.
            This overlap happens because the major and minor scales are similar.
            If you start on the sixth pitch of the major scale and play seven ascending pitches, you will play the intervals for the minor scale.
            Since C is the sixth pitch in Eb major, C minor will have the same pitches as Eb major.
          </p>
          <img className='full' src='/images/music-theory/minor-major.png' alt='minor-major' />
        </div>
        <div className='item'>
          <h3 id='chords'>
            Chords
          </h3>
          <p>
            A chord is any group of pitches played together.
            However, we think of most chords as following a simple pattern.
            Let's explore that pattern!
          </p>
          <p>
            First, choose a key (ex: C major, Bb major, D minor, etc).
            Then, choose one pitch that is in that key.
            Starting with that pitch and counting upward, find the first, third, and fifth pitches in the key.
            Playing these three pitches together will result in a chord that is in key!
          </p>
          <p>
            For instance, in the key of C major, if we start on a C, we would play C, E, and G.
            These three pitches make a C major chord.
            However, just because we are in the key of C, we don't have to choose C for the starting pitch.
            We can choose any pitch in our key for our first pitch.
            If we start on a D, we would play a D, F, and A, to make a D minor chord.
          </p>
          <p>
            You might have noticed, I referred to these chords as C major and D minor.
            Chord names have two parts, the root and the quality.
            Root, is just the term for the first pitch we picked to make the chord.
            Quality refers to the intervals between the pitches in the chord.
            Since some of the pitches in the key are closer than others, so are the pitches in each chord.
          </p>
          <img className='full' src='/images/music-theory/keyboard.png' alt='keyboard' />
          <img className='full' src='/images/music-theory/chords.png' alt='chords' />
          <p>
            You can see that with major chords the distance between the first pitch and third pitch is 4 half steps (2 whole steps).
            In minor chords that distance is only 3 half steps.
            In both major and minor chords, the distance from the first to the fifth is 7 half steps.
            The odd chord out above is the B diminished.
            A diminished chord has 3 half steps between both the first and third and the third and fifth.
          </p>
          <p>
            You can start on any pitch in any key and following this pattern find a chord in that key.
            Since each key has seven pitches, this pattern can make seven chords in any key.
            However, this is not the only pattern people use the make chords.
            Later, we will discuss other patterns that can be used to derive other quality chords that also commonly used.
          </p>
        </div>
        <div className='item'>
          <h3 id='more-to-come'>
            More to come...
          </h3>
          <p>
            Thank you for reading!
            If you got this far, please reach out to me and let me know your thoughts.
            I will continue adding more sections and would be happy to hear what you found useful or confusing.
            My contact information is on the home page.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MusicTheory;
