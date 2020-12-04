def test_scores_are_five_each(highscores, recent_scores):
    print("Testing highscores and recent scores have five each\n")
    assert len(highscores) == 5
    assert len(recent_scores) == 5

def test_highscores_ordered_high_to_low(highscores):
    len_ = len(highscores)
    print("Testing highscores is ordered high to low\n")
    for i in range(len_):
        if i + 1 == len_:
            break 
        assert highscores[i] >= highscores[i + 1]